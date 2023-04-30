import { UserType } from './user.type';
import type { ScoresModel } from '../../scores';

export class ScoreType {
  id: number;
  leve: number;
  score: number;
  sum?: number;
  owner: UserType;
  updatedAt: Date;
  createdAt: Date;

  constructor(score: ScoresModel) {
    this.id = score.id;
    this.leve = score.level;
    this.score = score.score;
    this.sum = score.sum;
    this.owner = new UserType(score.owner!);
    this.updatedAt = new Date(score.updatedAt ?? null);
    this.createdAt = new Date(score.createdAt ?? null);
  }
}
