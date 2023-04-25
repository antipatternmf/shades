import { UserType } from './user.type';
import type { PostModel } from '../../post';
import { ListEmotionsType } from './list-emotions.type';

export class PostType {
  id: number;
  text: string;
  // thread: ThreadType;
  emotions?: ListEmotionsType;
  owner: UserType;
  updatedAt: Date;
  createdAt: Date;

  constructor(post: PostModel) {
    this.id = post.id;
    this.text = post.text;
    this.owner = new UserType(post.owner!);
    // this.thread = new ThreadType(post.thread!);
    this.emotions = post.emotions?.length ? new ListEmotionsType(post.emotions!) : undefined;
    this.updatedAt = new Date(post.updatedAt ?? null);
    this.createdAt = new Date(post.createdAt ?? null);
  }
}
