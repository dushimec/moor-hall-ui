// Base types for Moor Hall Restaurant Admin System

export type ID = string;

export type Status = 'new' | 'confirmed' | 'preparing' | 'ready' | 'out_for_delivery' | 'completed' | 'cancelled';

export type PaymentStatus = 'pending' | 'partial' | 'paid' | 'failed' | 'cancelled';

export type PaymentMethod = 'cash' | 'card' | 'online' | 'pay_on_delivery' | 'custom' | 'mobile_money';

export type OrderType = 'pickup' | 'delivery';

export type ReservationStatus = 'pending' | 'confirmed' | 'cancelled' | 'no_show';

export type CateringStatus = 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';

export type NotificationType = 'order_update' | 'payment_confirmation' | 'receipt' | 'reservation_update' | 'catering_update';

export type NotificationStatus = 'sent' | 'failed' | 'pending';

export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
  notes?: string;
}

export interface Customer {
  id: ID;
  name: string;
  phone: string;
  email?: string;
  createdAt: string;
}

export interface OrderItem {
  id: ID;
  menuItemId: ID;
  name: string;
  quantity: number;
  price: number;
  notes?: string;
  specialInstructions?: string;
}

export interface Order {
  id: ID;
  orderNumber: string;
  customer: Customer;
  items: OrderItem[];
  orderType: OrderType;
  deliveryAddress?: Address;
  pickupTime?: string;
  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
  status: Status;
  paymentStatus: PaymentStatus;
  paymentMethod?: PaymentMethod;
  customerNotes?: string;
  adminNotes?: string;
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
}

export interface Payment {
  id: ID;
  orderId: ID;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  transactionId?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentRecord {
  id: ID;
  orderId: ID;
  amount: number;
  method: PaymentMethod;
  type: 'full' | 'partial' | 'deposit';
  status: PaymentStatus;
  transactionId?: string;
  notes?: string;
  createdAt: string;
}

export interface StatusHistory {
  id: ID;
  orderId: ID;
  previousStatus: Status;
  newStatus: Status;
  timestamp: string;
  notificationSent: boolean;
  notificationId?: string;
  updatedBy?: string;
}

export interface Reservation {
  id: ID;
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
  status: ReservationStatus;
  notes?: string;
  specialRequests?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CateringRequest {
  id: ID;
  name: string;
  phone: string;
  email?: string;
  eventType: string;
  location: string;
  date: string;
  time: string;
  guests: number;
  budget?: number;
  status: CateringStatus;
  notes?: string;
  requirements?: string;
  followUpNotes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface MenuItem {
  id: ID;
  categoryId: ID;
  name: string;
  description: string;
  price: number;
  image?: string;
  isAvailable: boolean;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface MenuCategory {
  id: ID;
  name: string;
  description?: string;
  order: number;
  isActive: boolean;
  createdAt: string;
}

export interface NotificationLog {
  id: ID;
  phoneNumber: string;
  type: NotificationType;
  message: string;
  status: NotificationStatus;
  orderId?: ID;
  reservationId?: ID;
  cateringId?: ID;
  sentAt: string;
  error?: string;
}

export interface AdminActionLog {
  id: ID;
  adminId?: string;
  action: string;
  entityType: string;
  entityId: string;
  details: string;
  timestamp: string;
  ipAddress?: string;
}

export interface DashboardMetrics {
  totalOrders: number;
  ordersByStatus: Record<Status, number>;
  totalRevenue: number;
  paymentSummary: Record<PaymentStatus, number>;
  totalReservations: number;
  totalCateringRequests: number;
  popularItems: Array<{name: string; count: number}>;
  recentOrders: Order[];
  revenueByDay: Array<{date: string; amount: number}>;
}

export interface ReportData {
  period: {
    start: string;
    end: string;
  };
  totalRevenue: number;
  totalOrders: number;
  ordersByStatus: Record<Status, number>;
  paymentBreakdown: Record<PaymentStatus, number>;
  popularItems: Array<{name: string; count: number; revenue: number}>;
  reservationsCount: number;
  cateringRequestsCount: number;
  averageOrderValue: number;
}

export interface ContentBlock {
  id: ID;
  key: string;
  title?: string;
  content?: string;
  image?: string;
  link?: string;
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface PromoBanner {
  id: ID;
  title: string;
  subtitle?: string;
  image: string;
  link?: string;
  isActive: boolean;
  startDate?: string;
  endDate?: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}
