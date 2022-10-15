import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  amount: '',
  description: '',
  balanceType: 'income',
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
});

export default balanceSlice.reducer;
