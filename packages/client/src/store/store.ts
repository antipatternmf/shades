import { configureStore, Middleware } from '@reduxjs/toolkit';
import * as process from 'process';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { rootReducer } from './rootReducer';

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

const store = configureStore({
  reducer: rootReducer,
  devTools: isDevMode,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
