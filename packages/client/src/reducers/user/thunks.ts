import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  authApi, BadRequestError, SignInRequest, SignUpRequest,
} from 'api';
import { AxiosError } from 'axios';

const sliceName = 'user';

export const userGet = createAsyncThunk(`${sliceName}/userGet`, async (data, thunkAPI) => {
  try {
    const res = await authApi.authUserGet();
    return res.data;
  } catch (e) {
    const err = e as AxiosError<BadRequestError>;
    const error: BadRequestError = { reason: 'error' };
    if (err.response?.data) {
      error.reason = err.response.data.reason;
    }
    return thunkAPI.rejectWithValue(error);
  }
});

export const userLogout = createAsyncThunk(`${sliceName}/userLeave`, async (data, thunkAPI) => {
  try {
    const res = await authApi.authLogoutPost();
    return res.data;
  } catch (e) {
    const err = e as AxiosError<BadRequestError>;
    const error: BadRequestError = { reason: 'error' };
    if (err.response?.data) {
      error.reason = err.response.data.reason;
    }
    return thunkAPI.rejectWithValue(error);
  }
});

export const signUp = createAsyncThunk(`${sliceName}/signUp`, async (data: SignUpRequest, thunkAPI) => {
  try {
    const res = await authApi.authSignupPost(data);
    thunkAPI.dispatch(userGet());
    return res.data;
  } catch (e) {
    const err = e as AxiosError<BadRequestError>;
    const error: BadRequestError = { reason: 'error' };
    if (err.response?.data) {
      error.reason = err.response.data.reason;
    }
    return thunkAPI.rejectWithValue(error);
  }
});

export const signIn = createAsyncThunk(`${sliceName}/signIn`, async (data: SignInRequest, thunkAPI) => {
  try {
    const res = await authApi.authSigninPost(data);
    thunkAPI.dispatch(userGet());
    return res.data;
  } catch (e) {
    const err = e as AxiosError<BadRequestError>;
    const error: BadRequestError = { reason: 'error' };
    if (err.response?.data) {
      error.reason = err.response.data.reason;
    }
    return thunkAPI.rejectWithValue(error);
  }
});
