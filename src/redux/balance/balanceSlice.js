import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  amount: '',
  description: '',
  balanceType: 'income',
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    handleValues: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: (state) => {
      state.name = '';
      state.amount = '';
      state.description = '';
      state.balanceType = 'income';
    },
  },
});
export const { handleValues, clearValues } = balanceSlice.actions;
export default balanceSlice.reducer;
