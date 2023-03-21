import { name as user, userReducer } from 'reducers/user';
import { game, gameReducer } from 'reducers/game';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [game]: gameReducer,
  [user]: userReducer,
});
