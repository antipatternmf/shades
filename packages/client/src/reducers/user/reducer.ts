import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userGet, userLogout } from 'reducers/user/thunks';
import { UserResponse } from 'api/chat';

type User = UserResponse;

interface InitialState {
  isAuth: boolean,
  data: User | null,
  status: Status
}

const initialState: InitialState = {
  isAuth: false,
  data: null,
  status: null,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userGet.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(userGet.rejected, (state) => {
      state.status = 'rejected';
    });
    builder.addCase(userGet.fulfilled, (state, action) => {
      if (action.payload) {
        state.isAuth = true;
        state.data = action.payload;
        state.status = 'fulfilled';
      }
    });
    builder.addCase(userLogout.fulfilled, () => {
      return initialState;
    });
  },
});

export default slice.reducer;
export const { name } = slice;
export const { setUserIsAuth } = slice.actions;
