import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';

const API_URL = (import.meta.env && import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : 'http://localhost:3005/api') as string;

class ApiService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });

    // Request interceptor to add auth token
    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('adminToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor to handle auth errors
    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: any) => {
        const originalRequest = error.config;

        // Handle 401 Unauthorized
        if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
          // Prevent infinite loop if the refresh request itself fails
          if (originalRequest.url === '/auth/refresh') {
            // Refresh failed, clear auth and redirect to login
            localStorage.removeItem('adminToken');
            localStorage.removeItem('isAdminLoggedIn');
            localStorage.removeItem('adminUser');
            window.location.href = '/admin/login';
            return Promise.reject(error);
          }

          // Only attempt refresh if the original request was authenticated (had Authorization header)
          if (!originalRequest.headers?.Authorization) {
            // Unauthenticated request, do not redirect, just reject
            return Promise.reject(error);
          }

          originalRequest._retry = true;

          const refreshToken = localStorage.getItem('refreshToken');
          if (refreshToken) {
            try {
              const response = await this.client.post('/auth/refresh', { refreshToken });
              const { accessToken, refreshToken: newRefreshToken } = response.data.data;
              
              localStorage.setItem('adminToken', accessToken);
              if (newRefreshToken) {
                localStorage.setItem('refreshToken', newRefreshToken);
              }
              
              // Retry original request with new token
              originalRequest.headers.Authorization = `Bearer ${accessToken}`;
              return this.client(originalRequest);
            } catch (refreshError) {
              // Refresh failed, clear auth and redirect to login
              localStorage.removeItem('adminToken');
              localStorage.removeItem('isAdminLoggedIn');
              localStorage.removeItem('adminUser');
              window.location.href = '/admin/login';
              return Promise.reject(error);
            }
          } else {
            // No refresh token, redirect to login
            localStorage.removeItem('adminToken');
            localStorage.removeItem('isAdminLoggedIn');
            localStorage.removeItem('adminUser');
            window.location.href = '/admin/login';
            return Promise.reject(error);
          }
        }
        
        return Promise.reject(error);
      }
    );
  }

  setAuthToken(token: string | null) {
    if (token) {
      this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete this.client.defaults.headers.common['Authorization'];
    }
  }

  // Auth
  async login(data: { email: string; password: string }) {
    return this.client.post('/auth/login', data);
  }

  async register(data: { 
    fullName: string;
    email: string; 
    password: string; 
    phoneNumber?: string
  }) {
    return this.client.post('/auth/register', data);
  }

  async refreshToken(refreshToken: string) {
    return this.client.post('/auth/refresh', { refreshToken });
  }

  async logout() {
    const response = await this.client.post('/auth/logout');
    localStorage.removeItem('adminToken');
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('adminUser');
    return response;
  }

  async getMe() {
    return this.client.get('/auth/me');
  }

  async changePassword(data: { currentPassword: string; newPassword: string }) {
    return this.client.patch('/auth/change-password', data);
  }

  async updateProfile(data: { fullName?: string; phoneNumber?: string }) {
    return this.client.patch('/auth/profile', data);
  }

  // Password reset
  async forgotPassword(data: { email: string }) {
    return this.client.post('/auth/forgot-password', data);
  }

  async resetPassword(data: { resetToken: string; newPassword: string; confirmPassword: string }) {
    return this.client.post('/auth/reset-password', data);
  }

  // Menu Items
  async getMenuItems(params?: { categoryId?: number; includeUnavailable?: boolean }) {
    return this.client.get('/admin/menu-items', { params });
  }

  async getMenuItem(id: number) {
    return this.client.get(`/admin/menu-items/${id}`);
  }

  async createMenuItem(data: any) {
    return this.client.post('/admin/menu-items', data);
  }

  async updateMenuItem(id: number, data: any) {
    return this.client.patch(`/admin/menu-items/${id}`, data);
  }

  async toggleMenuItemAvailability(id: number) {
    return this.client.patch(`/admin/menu-items/${id}/availability`);
  }

  async deleteMenuItem(id: number) {
    return this.client.delete(`/admin/menu-items/${id}`);
  }

  // Categories
  async getCategories(params?: { includeInactive?: boolean }) {
    return this.client.get('/admin/categories', { params });
  }

  async getCategory(id: number) {
    return this.client.get(`/admin/categories/${id}`);
  }

  async createCategory(data: any) {
    return this.client.post('/admin/categories', data);
  }

  async updateCategory(id: number, data: any) {
    return this.client.patch(`/admin/categories/${id}`, data);
  }

  async deleteCategory(id: number) {
    return this.client.delete(`/admin/categories/${id}`);
  }

  // Orders
  async getOrders(params?: { status?: string; paymentStatus?: string; page?: number; limit?: number }) {
    return this.client.get('/orders', { params });
  }

  async getOrder(id: number) {
    return this.client.get(`/orders/${id}`);
  }

  async updateOrderStatus(id: number, status: string, note?: string) {
    return this.client.patch(`/orders/${id}/status`, { status, note });
  }

  async reviewPayment(id: number, action: 'approve' | 'reject', note?: string) {
    return this.client.post(`/orders/${id}/review-payment`, { action, note });
  }

  // Dashboard
  async getDashboardStats() {
    return this.client.get('/admin/dashboard');
  }

  // Service Items
  async getServiceItems() {
    return this.client.get('/admin/service-items');
  }

  async createServiceItem(data: any) {
    return this.client.post('/admin/service-items', data);
  }

  async updateServiceItem(id: number, data: any) {
    return this.client.patch(`/admin/service-items/${id}`, data);
  }

  async deleteServiceItem(id: number) {
    return this.client.delete(`/admin/service-items/${id}`);
  }

  // Reservations
  async getReservations(params?: { status?: string; page?: number; limit?: number }) {
    return this.client.get('/admin/reservations', { params });
  }

  async updateReservationStatus(id: number, status: string) {
    return this.client.patch(`/admin/reservations/${id}/status`, { status });
  }

  // Catering
  async getCateringRequests(params?: { status?: string; page?: number; limit?: number }) {
    return this.client.get('/admin/catering', { params });
  }

  async updateCateringStatus(id: number, status: string) {
    return this.client.patch(`/admin/catering/${id}/status`, { status });
  }

  // Payments
  async getPayments(params?: { orderId?: number; page?: number; limit?: number }) {
    return this.client.get('/admin/payments', { params });
  }

  async verifyPayment(id: number, status: 'VERIFIED' | 'REJECTED', note?: string) {
    return this.client.post(`/admin/payments/${id}/verify`, { status, note });
  }

  // Content
  async getContentBlocks() {
    return this.client.get('/admin/content/blocks');
  }

  async updateContentBlock(id: number, data: any) {
    return this.client.patch(`/admin/content/blocks/${id}`, data);
  }

  async getPromoBanners() {
    return this.client.get('/admin/content/promo-banners');
  }

  async updatePromoBanner(id: number, data: any) {
    return this.client.patch(`/admin/content/promo-banners/${id}`, data);
  }

  // Settings
  async getSettings() {
    return this.client.get('/admin/settings');
  }

  async updateSetting(id: number, data: any) {
    return this.client.patch(`/admin/settings/${id}`, data);
  }

  // Reports
  async getReports(params: { startDate: string; endDate: string }) {
    return this.client.get('/admin/reports', { params });
  }

  async getRevenueStats(params?: { period?: 'daily' | 'weekly' | 'monthly' }) {
    return this.client.get('/admin/reports/revenue', { params });
  }
}

export const apiService = new ApiService();
export default apiService;
