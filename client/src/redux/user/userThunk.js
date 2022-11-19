import axios from 'axios';
import authFetch from '../../utils/axios';

export const registerUserThunk = async (user, thunkAPI) => {
  try {
    const response = await axios.post('/api/v1/auth/register', user);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (user, thunkAPI) => {
  try {
    const response = await axios.post('/api/v1/auth/login', user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.reponse.data.msg);
  }
};

export const updateUserThunk = async (user, thunkAPI) => {
  try {
    const response = await axios.patch('/api/v1/auth/updateUser', user, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

export const getUserThunk = async (_, thunkAPI) => {
  try {
    const response = await authFetch('/auth/getUser');
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
