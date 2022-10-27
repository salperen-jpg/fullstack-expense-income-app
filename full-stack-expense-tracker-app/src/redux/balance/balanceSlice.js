import { createSlice } from '@reduxjs/toolkit';

const someBalance = [
  {
    id: 1,
    name: 'TV',
    amount: 499.99,
    typeFilter: 'expense',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ex at accusantium odio nobis impedit? Nobis assumenda voluptate doloribus voluptatem?',
  },
  {
    id: 2,
    name: 'Earning',
    amount: 999.99,
    typeFilter: 'income',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ex at accusantium odio nobis impedit? Nobis assumenda voluptate doloribus voluptatem?',
  },
  {
    id: 3,
    name: 'garbage',
    amount: 49.87,
    typeFilter: 'expense',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ex at accusantium odio nobis impedit? Nobis assumenda voluptate doloribus voluptatem?',
  },
];

const initialState = {
  allBalances: someBalance,
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
});
export const { handleValues, clearValues, handleViews } = balanceSlice.actions;
export default balanceSlice.reducer;
