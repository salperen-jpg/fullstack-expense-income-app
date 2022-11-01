import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './features/UI/uiSlice';
import balanceSlice from './balance/balanceSlice';
import userSlice from './user/userSlice';
export const store = configureStore({
  reducer: {
    ui: uiSlice,
    balance: balanceSlice,
    user: userSlice,
  },
});
