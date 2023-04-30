import { ScoreType } from './score.type';
import type { ScoresModel } from '../../scores';

export class ListScoresType {
  scores?: ScoreType[];

  constructor(scores?: ScoresModel[]) {
    if (!scores) {
      return;
    }

    this.scores = scores.map((score) => new ScoreType(score));
  }
}
