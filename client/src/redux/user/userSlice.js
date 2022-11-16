import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  addToLocalStorage,
  getFromLocalStore,
  removeFromLocalStorage,
} from '../../utils/localStorage';

import {
  registerUserThunk,
  loginUserThunk,
  updateUserThunk,
} from './userThunk';

const initialState = {
  user: getFromLocalStore(),
  isLoading: false,
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  registerUserThunk
);

export const loginUser = createAsyncThunk('user/loginUser', loginUserThunk);

export const updateUser = createAsyncThunk('user/updateUser', updateUserThunk);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state) => {
      state.user = null;
      toast.success('Logging out...');
      removeFromLocalStorage();
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload: { user } }) => {
      state.isLoading = false;
      state.user = user;
      addToLocalStorage(user);
      toast.success(`Welcome ${user.name}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload: { user } }) => {
      state.isLoading = false;
      state.user = user;
      addToLocalStorage(user);
      toast.success(`Welcome back ${user.name}`);
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload: { user } }) => {
      state.isLoading = false;
      state.user = user;
      toast.success('The profile updated');
      addToLocalStorage(user);
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default userSlice.reducer;
export const { logOut } = userSlice.actions;
