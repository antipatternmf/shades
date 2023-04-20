import { RootState } from 'store/store';

export const selectLevelScore = (levelId: number) => (state: RootState) => {
  return state.scores.scores[levelId] || 0;
};
