import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './features/UI/uiSlice';
import balanceSlice from './balance/balanceSlice';
export const store = configureStore({
  reducer: {
    ui: uiSlice,
    balance: balanceSlice,
  },
});
