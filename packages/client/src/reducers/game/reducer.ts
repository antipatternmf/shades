import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type GameStatus = 'idle' | 'started' | 'pause' | 'win' | 'lose';

export interface GameInitialState {
  gameStatus: GameStatus,
  targets?: null,
  obstacles?: null,
}

const initialState: GameInitialState = {
  gameStatus: 'idle',
};

const slice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameStatus: (state, action: PayloadAction<GameStatus>) => {
      state.gameStatus = action.payload;
    },
  },
});

export const { name, reducer } = slice;

export type GameReducer = ReturnType<typeof reducer>;

export const { setGameStatus } = slice.actions;
