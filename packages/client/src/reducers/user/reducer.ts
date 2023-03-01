import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  isAuth: boolean,
}

export const sliceName = 'user';

const initialState: InitialState = {
  isAuth: true,
};

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setUserIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export default slice.reducer;

export const { setUserIsAuth } = slice.actions;
