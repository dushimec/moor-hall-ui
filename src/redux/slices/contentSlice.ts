import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { ContentBlock, PromoBanner } from '../../types';

interface ContentState {
  contentBlocks: ContentBlock[];
  promoBanners: PromoBanner[];
  loading: boolean;
  error: string | null;
}

const initialState: ContentState = {
  contentBlocks: [],
  promoBanners: [],
  loading: false,
  error: null,
};

export const fetchContentBlocks = createAsyncThunk('content/fetchBlocks', async () => {
  const response = await fetch('/api/admin/content/blocks');
  const data = await response.json();
  return data.data;
});

export const updateContentBlock = createAsyncThunk('content/updateBlock', async (blockData: ContentBlock) => {
  const response = await fetch(`/api/admin/content/blocks/${blockData.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blockData),
  });
  const data = await response.json();
  return data.data;
});

export const fetchPromoBanners = createAsyncThunk('content/fetchPromoBanners', async () => {
  const response = await fetch('/api/admin/content/promo-banners');
  const data = await response.json();
  return data.data;
});

export const updatePromoBanner = createAsyncThunk('content/updatePromoBanner', async (bannerData: PromoBanner) => {
  const response = await fetch(`/api/admin/content/promo-banners/${bannerData.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bannerData),
  });
  const data = await response.json();
  return data.data;
});

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    clearContentError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContentBlocks.fulfilled, (state, action) => {
        state.contentBlocks = action.payload;
      })
      .addCase(updateContentBlock.fulfilled, (state, action) => {
        const index = state.contentBlocks.findIndex(b => b.id === action.payload.id);
        if (index !== -1) {
          state.contentBlocks[index] = action.payload;
        }
      })
      .addCase(fetchPromoBanners.fulfilled, (state, action) => {
        state.promoBanners = action.payload;
      })
      .addCase(updatePromoBanner.fulfilled, (state, action) => {
        const index = state.promoBanners.findIndex(b => b.id === action.payload.id);
        if (index !== -1) {
          state.promoBanners[index] = action.payload;
        }
      });
  },
});

export const { clearContentError } = contentSlice.actions;
export default contentSlice.reducer;
