import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { Reservation } from '../../types';

interface ReservationState {
  reservations: Reservation[];
  loading: boolean;
  error: string | null;
}

const initialState: ReservationState = {
  reservations: [],
  loading: false,
  error: null,
};

export const fetchReservations = createAsyncThunk('reservations/fetchAll', async (params?: { status?: string; page?: number; limit?: number }) => {
  const queryParams = new URLSearchParams();
  if (params?.status) queryParams.append('status', params.status);
  if (params?.page) queryParams.append('page', params.page.toString());
  if (params?.limit) queryParams.append('limit', params.limit.toString());

  const response = await fetch(`/api/admin/reservations?${queryParams}`);
  const data = await response.json();
  return data.data;
});

export const updateReservationStatus = createAsyncThunk('reservations/updateStatus', async ({ id, status }: { id: number; status: string }) => {
  const response = await fetch(`/api/admin/reservations/${id}/status`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
  const data = await response.json();
  return data.data;
});

const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    clearReservationError: (state) => {
      state.error = null;
    },
    updateReservationInList: (state, action: PayloadAction<Reservation>) => {
      const index = state.reservations.findIndex(r => r.id === action.payload.id);
      if (index !== -1) {
        state.reservations[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.loading = false;
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch reservations';
      })
      .addCase(updateReservationStatus.fulfilled, (state, action) => {
        const index = state.reservations.findIndex(r => r.id === action.payload.id);
        if (index !== -1) {
          state.reservations[index] = action.payload;
        }
      });
  },
});

export const { clearReservationError, updateReservationInList } = reservationSlice.actions;
export default reservationSlice.reducer;
