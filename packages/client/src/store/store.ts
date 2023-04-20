import { configureStore, Middleware } from '@reduxjs/toolkit';
import * as process from 'process';
import thunk from 'redux-thunk';

import { GameReducer } from 'reducers/game/reducer';
import { UserReducer } from 'reducers/user/reducer';
import { ScoresSliceState } from 'reducers/scores';
import { createLogger } from 'redux-logger';
import { rootReducer } from './rootReducer';

export type RootState = {
  user: UserReducer;
  game: GameReducer;
  scores: ScoresSliceState;
};

const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => '#139bfe',
    prevState: () => '#1c5faf',
    action: () => '#149945',
    nextState: () => '#a47104',
    error: () => '#ff0005',
  },
});

const isDevMode = process.env.NODE_ENV === 'development';

const middleware: Middleware[] = [thunk];

if (isDevMode) {
  middleware.push(logger);
}

export const createStore = (preloadedState: RootState) => {
  return configureStore({
    reducer: rootReducer,
    devTools: isDevMode,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    preloadedState,
  });
};

let preloadedState;

if (typeof window !== 'undefined') {
  preloadedState = window.initialState;

  delete window.initialState;
}

const store = createStore(preloadedState);

export default store;

export type AppDispatch = typeof store.dispatch;
