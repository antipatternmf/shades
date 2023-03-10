import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi, SignInRequest, SignUpRequest } from 'api';
import { requestErrorHandler } from 'utils/requestErrorHandler';

const sliceName = 'user';

export const userGet = createAsyncThunk(
  `${sliceName}/userGet`,
  async (data, thunkAPI) => {
    try {
      const res = await authApi.authUserGet();
      return thunkAPI.fulfillWithValue(res.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(requestErrorHandler(e));
    }
  },
);

export const userLogout = createAsyncThunk(
  `${sliceName}/userLeave`,
  async (data, thunkAPI) => {
    try {
      const res = await authApi.authLogoutPost();
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(requestErrorHandler(e));
    }
  },
);

export const signUp = createAsyncThunk(
  `${sliceName}/signUp`,
  async (data: SignUpRequest, thunkAPI) => {
    try {
      const res = await authApi.authSignupPost(data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(requestErrorHandler(e));
    }
  },
);

export const signIn = createAsyncThunk(
  `${sliceName}/signIn`,
  async (data: SignInRequest, thunkAPI) => {
    try {
      const res = await authApi.authSigninPost(data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(requestErrorHandler(e));
    }
  },
);
