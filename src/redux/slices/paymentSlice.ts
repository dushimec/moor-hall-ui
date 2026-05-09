import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { Payment, PaymentRecord } from '../../types';

interface PaymentState {
  payments: Payment[];
  paymentRecords: PaymentRecord[];
  loading: boolean;
  error: string | null;
}

const initialState: PaymentState = {
  payments: [],
  paymentRecords: [],
  loading: false,
  error: null,
};

export const fetchPayments = createAsyncThunk('payments/fetchAll', async (params?: { orderId?: number; page?: number; limit?: number }) => {
  const queryParams = new URLSearchParams();
  if (params?.orderId) queryParams.append('orderId', params.orderId.toString());
  if (params?.page) queryParams.append('page', params.page.toString());
  if (params?.limit) queryParams.append('limit', params.limit.toString());

  const response = await fetch(`/api/admin/payments?${queryParams}`);
  const data = await response.json();
  return data.data;
});

export const verifyPayment = createAsyncThunk('payments/verify', async ({ id, status, note }: { id: number; status: 'VERIFIED' | 'REJECTED'; note?: string }) => {
  const response = await fetch(`/api/admin/payments/${id}/verify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status, note }),
  });
  const data = await response.json();
  return data.data;
});

const paymentSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {
    clearPaymentError: (state) => {
      state.error = null;
    },
    addPaymentRecord: (state, action: PayloadAction<PaymentRecord>) => {
      state.paymentRecords.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPayments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPayments.fulfilled, (state, action) => {
        state.loading = false;
        state.payments = action.payload;
      })
      .addCase(fetchPayments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch payments';
      })
      .addCase(verifyPayment.fulfilled, (state, action) => {
        const index = state.payments.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.payments[index] = action.payload;
        }
      });
  },
});

export const { clearPaymentError, addPaymentRecord } = paymentSlice.actions;
export default paymentSlice.reducer;
