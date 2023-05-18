import { UserType } from './user.type';
import type { PostModel } from '../../post';
import { ListEmotionsType } from './list-emotions.type';
import type { EmotionType } from './emotion.type';

export class PostType {
  id: number;
  text: string;
  countAnswers: number;
  // thread: ThreadType;
  emotions?: EmotionType[];
  owner: UserType;
  updatedAt: Date;
  createdAt: Date;

  constructor(post: PostModel) {
    this.id = post.id;
    this.text = post.text;
    this.countAnswers = post.countAnswers ?? 0;
    this.owner = new UserType(post.owner!);
    // this.thread = new ThreadType(post.thread!);
    this.emotions = post.emotions?.length
      ? new ListEmotionsType(post.emotions!).emotions
      : undefined;
    this.updatedAt = new Date(post.updatedAt ?? null);
    this.createdAt = new Date(post.createdAt ?? null);
  }
}
