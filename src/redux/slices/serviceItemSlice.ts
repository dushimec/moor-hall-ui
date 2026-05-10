import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { ServiceItem } from '../../types';

interface ServiceItemState {
  items: ServiceItem[];
  loading: boolean;
  error: string | null;
}

const initialState: ServiceItemState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchServiceItems = createAsyncThunk('serviceItems/fetchAll', async () => {
  const response = await fetch('/api/admin/service-items');
  const data = await response.json();
  return data.data;
});

export const createServiceItem = createAsyncThunk('serviceItems/create', async (itemData: Omit<ServiceItem, 'id' | 'createdAt' | 'updatedAt'>) => {
  const response = await fetch('/api/admin/service-items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemData),
  });
  const data = await response.json();
  return data.data;
});

export const updateServiceItem = createAsyncThunk('serviceItems/update', async ({ id, ...itemData }: { id: number } & Partial<ServiceItem>) => {
  const response = await fetch(`/api/admin/service-items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemData),
  });
  const data = await response.json();
  return data.data;
});

export const deleteServiceItem = createAsyncThunk('serviceItems/delete', async (id: number) => {
  await fetch(`/api/admin/service-items/${id}`, { method: 'DELETE' });
  return id;
});

const serviceItemSlice = createSlice({
  name: 'serviceItems',
  initialState,
  reducers: {
    clearServiceItemError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServiceItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServiceItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchServiceItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch service items';
      })
      .addCase(createServiceItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateServiceItem.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteServiceItem.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

export const { clearServiceItemError } = serviceItemSlice.actions;
export default serviceItemSlice.reducer;
