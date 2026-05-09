import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { MenuCategory } from '../../types';

interface CategoryState {
  categories: MenuCategory[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categories: [],
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk('categories/fetchAll', async () => {
  const response = await fetch('/api/admin/categories');
  const data = await response.json();
  return data.data;
});

export const createCategory = createAsyncThunk('categories/create', async (categoryData: Omit<MenuCategory, 'id' | 'createdAt' | 'updatedAt'>) => {
  const response = await fetch('/api/admin/categories', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoryData),
  });
  const data = await response.json();
  return data.data;
});

export const updateCategory = createAsyncThunk('categories/update', async ({ id, ...categoryData }: { id: number } & Partial<MenuCategory>) => {
  const response = await fetch(`/api/admin/categories/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(categoryData),
  });
  const data = await response.json();
  return data.data;
});

export const deleteCategory = createAsyncThunk('categories/delete', async (id: number) => {
  await fetch(`/api/admin/categories/${id}`, { method: 'DELETE' });
  return id;
});

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    clearCategoryError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch categories';
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.categories.findIndex(c => c.id === action.payload.id);
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(c => c.id !== action.payload);
      });
  },
});

export const { clearCategoryError } = categorySlice.actions;
export default categorySlice.reducer;
