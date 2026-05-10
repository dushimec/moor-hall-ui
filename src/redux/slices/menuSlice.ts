import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { MenuItem, MenuCategory } from '../../types';

interface MenuState {
  items: MenuItem[];
  categories: MenuCategory[];
  loading: boolean;
  error: string | null;
}

const initialState: MenuState = {
  items: [],
  categories: [],
  loading: false,
  error: null,
};

export const fetchMenuItems = createAsyncThunk('menu/fetchItems', async (params?: { includeUnavailable?: boolean }) => {
  const queryParams = new URLSearchParams();
  if (params?.includeUnavailable) queryParams.append('includeUnavailable', 'true');
  const response = await fetch(`/api/admin/menu-items?${queryParams}`);
  const data = await response.json();
  return data.data;
});

export const fetchCategories = createAsyncThunk('menu/fetchCategories', async () => {
  const response = await fetch('/api/admin/categories');
  const data = await response.json();
  return data.data;
});

export const createMenuItem = createAsyncThunk('menu/create', async (itemData: Omit<MenuItem, 'id' | 'createdAt' | 'updatedAt'>) => {
  const response = await fetch('/api/admin/menu-items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemData),
  });
  const data = await response.json();
  return data.data;
});

export const updateMenuItem = createAsyncThunk('menu/update', async ({ id, ...itemData }: { id: number } & Partial<MenuItem>) => {
  const response = await fetch(`/api/admin/menu-items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemData),
  });
  const data = await response.json();
  return data.data;
});

export const deleteMenuItem = createAsyncThunk<number, number>('menu/delete', async (id: number) => {
  await fetch(`/api/admin/menu-items/${id}`, { method: 'DELETE' });
  return id;
});

export const toggleMenuItemAvailability = createAsyncThunk('menu/toggleAvailability', async (id: number) => {
  const response = await fetch(`/api/admin/menu-items/${id}/availability`, {
    method: 'PATCH',
  });
  const data = await response.json();
  return data.data;
});

export const createCategory = createAsyncThunk('menu/createCategory', async (categoryData: Omit<MenuCategory, 'id' | 'createdAt' | 'updatedAt'>) => {
  const response = await fetch('/api/admin/categories', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoryData),
  });
  const data = await response.json();
  return data.data;
});

export const updateCategory = createAsyncThunk('menu/updateCategory', async ({ id, ...categoryData }: { id: number } & Partial<MenuCategory>) => {
  const response = await fetch(`/api/admin/categories/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoryData),
  });
  const data = await response.json();
  return data.data;
});

export const deleteCategory = createAsyncThunk('menu/deleteCategory', async (id: number) => {
  await fetch(`/api/admin/categories/${id}`, { method: 'DELETE' });
  return id;
});

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    clearMenuError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMenuItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMenuItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch menu items';
      })
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch categories';
      })
      .addCase(createMenuItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateMenuItem.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteMenuItem.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== Number(action.payload));
      })
      .addCase(toggleMenuItemAvailability.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.categories.findIndex(cat => cat.id === action.payload.id);
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(cat => cat.id !== action.payload);
      });
  },
});

export const { clearMenuError } = menuSlice.actions;
export default menuSlice.reducer;
