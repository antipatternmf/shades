import type { TotalScoreDto } from './total-score.dto';

export type AllTotalsDto = {
  items: TotalScoreDto[];
  total: number;
  offset: number;
  limit: number;
};
