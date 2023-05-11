export { name as game, reducer as gameReducer, setGameStatus } from './reducer';
export type { GameStatus } from './reducer';
export * as selectGame from './selectors';
export { useSetGameStatus } from './useSetGameStatus';
