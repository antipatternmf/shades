import type { EmotionModel } from '../../emotion';
import { EmotionType } from './emotion.type';

export class ListEmotionsType {
  emotions?: EmotionType[];

  constructor(emotions?: EmotionModel[]) {
    if (!emotions) {
      return;
    }

    this.emotions = emotions.map((emotion) => new EmotionType(emotion));
  }
}
