import authFetch from '../../utils/axios';
import { clearValues, getAllBalances } from './balanceSlice';

export const createBalanceThunk = async (balance, thunkAPI) => {
  try {
    const response = await authFetch.post('/balances', balance);
    thunkAPI.dispatch(clearValues());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getBalanceThunk = async (_, thunkAPI) => {
  const {
    filters: { nameFilter, sort, typeFilter, amountFilter },
  } = thunkAPI.getState().balance;
  let url = `?balanceType=${typeFilter}&sort=${sort}`;
  if (nameFilter) {
    url += `&search=${nameFilter}`;
  }
  if (amountFilter !== 0) {
    url += `&amount=${amountFilter}`;
  }

  try {
    const response = await authFetch.get(`/balances${url}`);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const deleteBalanceThunk = async (id, thunkAPI) => {
  try {
    const response = await authFetch.delete(`/balances/${id}`);
    thunkAPI.dispatch(getAllBalances());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const editBalanceThunk = async (balanceInfo, thunkAPI) => {
  try {
    await authFetch.patch(
      `/balances/${thunkAPI.getState().balance.editingId}`,
      balanceInfo
    );
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getStatsThunk = async (_, thunkAPI) => {
  try {
    const response = await authFetch('/balances/stats');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getAmountThunk = async (_, thunkAPI) => {
  const {
    filters: { nameFilter, sort, typeFilter },
  } = thunkAPI.getState().balance;
  let url = `?balanceType=${typeFilter}&sort=${sort}`;
  try {
    const response = await authFetch.get(`/balances${url}`);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
