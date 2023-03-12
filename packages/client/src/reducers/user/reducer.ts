import { createSlice } from '@reduxjs/toolkit';
import {
  userGet,
  userLogout,
  updateAvatar,
  updatePassword,
  updateProfile,
} from 'reducers/user/thunks';
import { UserResponse } from 'api/chat';

type User = UserResponse;

interface InitialState {
  isAuth: boolean;
  data: User | null;
  status: Status;
  error?: string;
}

const initialState: InitialState = {
  isAuth: false,
  data: null,
  status: null,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userGet.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(userGet.rejected, (state, action) => {
        state.error = action.payload as string;
        state.status = 'rejected';
      })
      .addCase(userGet.fulfilled, (state, action) => {
        if (action.payload) {
          state.isAuth = true;
          state.data = action.payload;
          state.status = 'fulfilled';
        }
      })
      .addCase(updateProfile.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(updateProfile.rejected, (state, { payload }) => {
        state.error = payload as string;
        state.status = 'rejected';
      })
      .addCase(updateProfile.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';

        if (payload) {
          state.data = payload;
        }
      })
      .addCase(updatePassword.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(updatePassword.rejected, (state, { payload }) => {
        state.error = payload as string;
        state.status = 'rejected';
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.status = 'fulfilled';
      })
      .addCase(updateAvatar.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(updateAvatar.rejected, (state, { payload }) => {
        state.error = payload as string;
        state.status = 'rejected';
      })
      .addCase(updateAvatar.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';

        if (payload) {
          state.data = payload;
        }
      });
    builder.addCase(userLogout.fulfilled, () => {
      return initialState;
    });
  },
});

export default slice.reducer;
export const { name } = slice;
