import { name as user, userReducer } from 'reducers/user';
import { game, gameReducer } from 'reducers/game';
import { name as ScoresSliceName, reducer as scoresReducer } from 'reducers/scores';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [game]: gameReducer,
  [user]: userReducer,
  [ScoresSliceName]: scoresReducer,
});
