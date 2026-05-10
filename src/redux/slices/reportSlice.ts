import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface ReportData {
  revenue: Record<string, string>;
  orders: Record<string, number>;
  topItems: { name: string; quantity: number }[];
}

interface ReportState {
  data: ReportData | null;
  loading: boolean;
  error: string | null;
}

const initialState: ReportState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchReports = createAsyncThunk('reports/fetch', async (params: { startDate: string; endDate: string }) => {
  const queryParams = new URLSearchParams();
  queryParams.append('startDate', params.startDate);
  queryParams.append('endDate', params.endDate);

  const response = await fetch(`/api/admin/reports?${queryParams}`);
  const data = await response.json();
  return data.data;
});

export const fetchRevenueStats = createAsyncThunk('reports/fetchRevenue', async (params?: { period?: 'daily' | 'weekly' | 'monthly' }) => {
  const queryParams = new URLSearchParams();
  if (params?.period) queryParams.append('period', params.period);

  const response = await fetch(`/api/admin/reports/revenue?${queryParams}`);
  const data = await response.json();
  return data.data;
});

const reportSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    clearReportError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReports.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReports.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchReports.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch reports';
      })
      .addCase(fetchRevenueStats.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export const { clearReportError } = reportSlice.actions;
export default reportSlice.reducer;
