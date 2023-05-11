import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { sliceName } from './constants';
import { getLevelsScores, setLevelScore } from './thunks';
import type { ScoresSliceState } from './types';

const initialState: ScoresSliceState = {
  status: null,
  scores: [],
  error: '',
};

function handePendingCase(state: ScoresSliceState) {
  state.status = 'pending';
}

function handleRejectedCase(state: ScoresSliceState, action: PayloadAction<unknown>) {
  state.error = action.payload as string;
  state.status = 'rejected';
}

function handleFulfilledCase(state: ScoresSliceState, action: PayloadAction<number[]>) {
  if (action.payload) {
    state.scores = action.payload;
    state.status = 'fulfilled';
    state.error = '';
  }
}

export const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLevelsScores.pending, handePendingCase)
      .addCase(getLevelsScores.rejected, handleRejectedCase)
      .addCase(getLevelsScores.fulfilled, handleFulfilledCase)
      .addCase(setLevelScore.pending, handePendingCase)
      .addCase(setLevelScore.rejected, handleRejectedCase)
      .addCase(setLevelScore.fulfilled, handleFulfilledCase);
  },
});

export const { name, reducer, actions } = slice;
