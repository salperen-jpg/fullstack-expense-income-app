import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  addToLocalStorage,
  getFromLocalStore,
  removeFromLocalStorage,
} from '../../utils/localStorage';
const initialState = {
  user: getFromLocalStore(),
  isLoading: false,
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    console.log(user);
    try {
      const response = await axios.post('/api/v1/auth/register', user);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/api/v1/auth/login', user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.reponse.data.msg);
    }
  }
);

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
      toast.success(`Welcome back ${user.name}`);
      addToLocalStorage(user);
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
  },
});

export default userSlice.reducer;
export const { logOut } = userSlice.actions;
