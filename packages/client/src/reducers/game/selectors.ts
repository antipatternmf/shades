import { RootState } from 'store/store';

const selectState = (state: RootState) => state.game;

export const status = (state: RootState) => selectState(state).gameStatus;
