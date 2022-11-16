import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  deleteBalanceThunk,
  editBalanceThunk,
  getAmountThunk,
  getBalanceThunk,
  getStatsThunk,
} from './balanceThunk';

const initialState = {
  // balance concern
  allBalances: [],
  numOfBalances: 0,
  numOfPages: 0,
  isLoading: false,
  name: '',
  amount: '',
  description: '',
  balanceType: 'income',
  isEditing: false,
  editingId: null,
  // stats
  stats: [],
  numOfExpenses: 0,
  numOfIncomes: 0,
  // filter and view
  filters: {
    nameFilter: '',
    min: 0,
    max: 0,
    amountFilter: 0,
    typeFilter: 'all',
    sort: 'newest',
  },
  gridView: true,
};

export const createBalance = createAsyncThunk(
  'balance/createBalance',
  createAsyncThunk
);

export const getAllBalances = createAsyncThunk(
  'balance/getAllBalances',
  getBalanceThunk
);

export const editBalance = createAsyncThunk(
  'balance/editBalance',
  editBalanceThunk
);

export const deleteBalance = createAsyncThunk(
  'balance/deleteBalance',
  deleteBalanceThunk
);

export const getStats = createAsyncThunk('balance/getStats', getStatsThunk);

export const getAmount = createAsyncThunk('balance/getAmount', getAmountThunk);

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
      state.isEditing = false;
      state.editingId = null;
    },
    handleViews: (state) => {
      state.gridView = !state.gridView;
    },
    setEditBalance: (state, { payload }) => {
      const specificBalance = state.allBalances.find(
        (balance) => balance._id === payload
      );
      const { name, amount, description, balanceType } = specificBalance;
      state.isEditing = true;
      state.editingId = payload;
      state.name = name;
      state.amount = amount;
      state.description = description;
      state.balanceType = balanceType;
    },
    handleLoading: (state) => {
      state.isLoading = false;
    },
    handleFilterInputs: (state, { payload: { name, value } }) => {
      if (name === 'amountFilter') {
        value = Number(value);
      }
      state.filters = {
        ...state.filters,
        [name]: value,
      };
    },
    clearFilterInputs: (state) => {
      const filters = {
        nameFilter: '',
        amountFilter: state.filters.max,
        typeFilter: 'all',
        sort: 'newest',
      };
      return { ...state, filters: { ...filters } };
    },
  },
  extraReducers: {
    [createBalance.pending]: (state) => {
      state.isLoading = true;
    },
    [createBalance.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success('Balance created...');
      clearValues();
    },
    [createBalance.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [getAllBalances.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllBalances.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.allBalances = payload.balances;
      state.numOfBalances = payload.numOfBalances;
      state.numOfPages = payload.numOfPages;
    },
    [getAllBalances.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [editBalance.pending]: (state) => {
      state.isLoading = true;
    },
    [editBalance.fulfilled]: (state) => {
      state.isLoading = false;
      state.name = '';
      state.amount = '';
      state.description = '';
      state.balanceType = 'income';
      state.isEditing = false;
      state.editingId = null;
      toast.success('Balance edited successfully...');
    },
    [editBalance.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [deleteBalance.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteBalance.fulfilled]: () => {
      toast.success('Balance is deleted...');
    },
    [deleteBalance.rejected]: (state, { payload }) => {
      toast.error(payload);
    },
    [getStats.pending]: (state) => {
      state.isLoading = true;
    },
    [getStats.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.stats = payload.stats;
      state.numOfExpenses = payload.numOfExpenses;
      state.numOfIncomes = payload.numOfIncomes;
    },
    [getStats.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [getAmount.fulfilled]: (state, { payload }) => {
      // Amount
      const amounts = payload.balances.map((balance) => balance.amount);
      const maxAmount = Math.max(...amounts);
      state.filters.amountFilter = maxAmount;
      state.filters.max = maxAmount;
    },
  },
});
export const {
  handleValues,
  clearValues,
  handleViews,
  setEditBalance,
  handleFilterInputs,
  clearFilterInputs,
} = balanceSlice.actions;
export default balanceSlice.reducer;
