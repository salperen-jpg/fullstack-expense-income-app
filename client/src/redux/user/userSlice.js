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

const userSlice = createSlice({
  name: 'user',
  initialState,
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
  },
});

export default userSlice.reducer;
