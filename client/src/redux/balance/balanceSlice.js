import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import authFetch from '../../utils/axios';

export const createBalance = createAsyncThunk(
  'balance/createBalance',
  async (balance, thunkAPI) => {
    try {
      const response = await authFetch.post('/balances', balance);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const initialState = {
  allBalances: [],
  isLoading: false,
  filters: {
    nameFilter: '',
    min: 0,
    max: 0,
    price: 0,
    typeFilter: 'all',
  },
  gridView: true,
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
    handleViews: (state) => {
      state.gridView = !state.gridView;
    },
  },
  extraReducers: {
    [createBalance.pending]: (state) => {
      state.isLoading = true;
    },
    [createBalance.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success('Balance created...');
    },
    [createBalance.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});
export const { handleValues, clearValues, handleViews } = balanceSlice.actions;
export default balanceSlice.reducer;
