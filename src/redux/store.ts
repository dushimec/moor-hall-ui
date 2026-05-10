import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './slices/menuSlice';
import orderReducer from './slices/orderSlice';
import dashboardReducer from './slices/dashboardSlice';
import categoryReducer from './slices/categorySlice';
import serviceItemReducer from './slices/serviceItemSlice';
import reservationReducer from './slices/reservationSlice';
import cateringReducer from './slices/cateringSlice';
import paymentReducer from './slices/paymentSlice';
import contentReducer from './slices/contentSlice';
import settingsReducer from './slices/settingsSlice';
import reportReducer from './slices/reportSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    orders: orderReducer,
    dashboard: dashboardReducer,
    categories: categoryReducer,
    serviceItems: serviceItemReducer,
    reservations: reservationReducer,
    catering: cateringReducer,
    payments: paymentReducer,
    content: contentReducer,
    settings: settingsReducer,
    reports: reportReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
