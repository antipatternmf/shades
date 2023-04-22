import { UserType } from './user.type';
import type { EmotionModel } from '../../emotion';

export class EmotionType {
  id: number;
  emotion: string;
  owner: UserType;
  updatedAt: Date;
  createdAt: Date;

  constructor(emotion: EmotionModel) {
    this.id = emotion.id;
    this.emotion = emotion.emotion;
    this.owner = new UserType(emotion.owner!);
    this.updatedAt = new Date(emotion.updatedAt ?? null);
    this.createdAt = new Date(emotion.createdAt ?? null);
  }
}
