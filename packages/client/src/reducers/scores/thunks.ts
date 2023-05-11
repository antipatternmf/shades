import { createAsyncThunk } from '@reduxjs/toolkit';
import { LevelsScores } from 'api';
import { requestErrorHandler } from 'utils/requestErrorHandler';
import type { RootState } from 'store/store';
import { sliceName } from './constants';

type SetLevelScorePayload = {
  levelId: number;
  score: number;
};

const apiConfiguration = new LevelsScores.Configuration({
  baseOptions: { withCredentials: false },
});

const levelScoreApi = new LevelsScores.LevelScoreApi(apiConfiguration);

export const getLevelsScores = createAsyncThunk(
  `${sliceName}/getLevelsScores`,
  async (_, thunkAPI) => {
    const storeState = thunkAPI.getState() as RootState;
    const username = storeState.user.data?.login || '';
    const email = storeState.user.data?.email || '';

    try {
      const result = await levelScoreApi.getLevelScores(username, {
        headers: { Authorization: email },
      });

      const responseItems = result.data;

      return responseItems.map(({ score }) => score);
    } catch (error) {
      return thunkAPI.rejectWithValue(requestErrorHandler(error));
    }
  },
);

export const setLevelScore = createAsyncThunk(
  `${sliceName}/setLevelScore`,
  async (params: SetLevelScorePayload, thunkAPI) => {
    const { levelId, score } = params;
    const storeState = thunkAPI.getState() as RootState;
    const username = storeState.user.data?.login || '';
    const email = storeState.user.data?.email || '';

    const newScores = [...storeState[sliceName].scores];
    newScores[levelId] = score;

    try {
      await levelScoreApi.saveLevelScore(
        { levelId, score, username },
        {
          headers: { Authorization: email },
        },
      );

      return newScores;
    } catch (error) {
      return thunkAPI.rejectWithValue(requestErrorHandler(error));
    }
  },
);
