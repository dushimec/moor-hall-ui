import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define the types for the dashboard state
interface DashboardState {
  stats: {
    overview: {
      totalOrders: number;
      totalCustomers: number;
      totalMenuItems: number;
      totalCategories: number;
      totalRevenue: string;
      todayOrders: number;
      todayRevenue: string;
    };
    ordersByStatus: {
      REQUESTED: number;
      CONFIRMED: number;
      PREPARING: number;
      READY: number;
      COMPLETED: number;
      CANCELLED: number;
    };
  } | null;
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  stats: null,
  loading: false,
  error: null,
};

// Async thunk to fetch dashboard stats
export const fetchDashboardStats = createAsyncThunk(
  'dashboard/fetchStats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/admin/dashboard`);
      if (!response.ok) {
        throw new Error('Failed to fetch dashboard stats');
      }
      const data = await response.json();
      // Assuming the API returns { success: true, data: {...} }
      if (data.success) {
        return data.data;
      } else {
        throw new Error(data.message || 'Failed to fetch dashboard stats');
      }
    } catch (error: any) {
      return rejectWithValue(error.message || 'An error occurred');
    }
  }
);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    clearDashboardError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardStats.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload;
      })
      .addCase(fetchDashboardStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || 'Failed to fetch dashboard stats';
      });
  },
});

export const { clearDashboardError } = dashboardSlice.actions;

// Selectors - using generic RootState to avoid circular dependency
export const selectDashboardStats = (state: { dashboard: DashboardState }) => state.dashboard.stats;
export const selectDashboardLoading = (state: { dashboard: DashboardState }) => state.dashboard.loading;
export const selectDashboardError = (state: { dashboard: DashboardState }) => state.dashboard.error;

export default dashboardSlice.reducer;