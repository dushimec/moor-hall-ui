import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { SiteSetting } from '../../types';

interface SettingsState {
  settings: SiteSetting[];
  loading: boolean;
  error: string | null;
}

const initialState: SettingsState = {
  settings: [],
  loading: false,
  error: null,
};

export const fetchSettings = createAsyncThunk('settings/fetchAll', async () => {
  const response = await fetch('/api/admin/settings');
  const data = await response.json();
  return data.data;
});

export const updateSetting = createAsyncThunk('settings/update', async (settingData: SiteSetting) => {
  const response = await fetch(`/api/admin/settings/${settingData.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(settingData),
  });
  const data = await response.json();
  return data.data;
});

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    clearSettingsError: (state) => {
      state.error = null;
    },
    updateSettingInList: (state, action: PayloadAction<SiteSetting>) => {
      const index = state.settings.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        state.settings[index] = action.payload;
      } else {
        state.settings.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettings.fulfilled, (state, action) => {
        state.settings = action.payload;
      })
      .addCase(updateSetting.fulfilled, (state, action) => {
        const index = state.settings.findIndex(s => s.id === action.payload.id);
        if (index !== -1) {
          state.settings[index] = action.payload;
        }
      });
  },
});

export const { clearSettingsError, updateSettingInList } = settingsSlice.actions;
export default settingsSlice.reducer;
