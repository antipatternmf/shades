import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  authApi,
  usersApi,
  ForumApi,
  ChangePasswordRequest,
  SignInRequest,
  SignUpRequest,
  UserUpdateRequest,
} from 'api';
import { transformAvatarUrlInUserResponse } from 'utils/transformAvatarUrl';
import { requestErrorHandler } from 'utils/requestErrorHandler';

const sliceName = 'user';

export const userGet = createAsyncThunk(`${sliceName}/userGet`, async (data, thunkAPI) => {
  try {
    const res = await authApi.authUserGet();
    const { data: userData } = res;

    await ForumApi.userApi.setUser({
      email: userData.email,
      login: userData.login,
      first_name: userData.first_name,
      second_name: userData.second_name,
      display_name: userData.display_name,
      phone: userData.phone,
      avatar: userData.avatar,
    });

    return thunkAPI.fulfillWithValue(transformAvatarUrlInUserResponse(res.data));
  } catch (e) {
    return thunkAPI.rejectWithValue(requestErrorHandler(e));
  }
});

export const userLogout = createAsyncThunk(`${sliceName}/userLeave`, async (data, thunkAPI) => {
  try {
    const res = await authApi.authLogoutPost();
    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(requestErrorHandler(e));
  }
});

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

export const updateProfile = createAsyncThunk(
  `${sliceName}/updateProfile`,
  async (data: Omit<UserUpdateRequest, 'display_name'>, thunkAPI) => {
    try {
      const response = await usersApi.userProfilePut({
        ...data,
        display_name: '',
      });

      return thunkAPI.fulfillWithValue(transformAvatarUrlInUserResponse(response.data));
    } catch (error) {
      return thunkAPI.rejectWithValue(requestErrorHandler(error));
    }
  },
);

export const updatePassword = createAsyncThunk(
  `${sliceName}/updatePassword`,
  async (data: ChangePasswordRequest, thunkAPI) => {
    try {
      const response = await usersApi.userPasswordPut(data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(requestErrorHandler(error));
    }
  },
);

export const updateAvatar = createAsyncThunk(
  `${sliceName}/updateAvatar`,
  async (data: File, thunkAPI) => {
    try {
      const response = await usersApi.userProfileAvatarPut(data);

      return thunkAPI.fulfillWithValue(transformAvatarUrlInUserResponse(response.data));
    } catch (error) {
      return thunkAPI.rejectWithValue(requestErrorHandler(error));
    }
  },
);
