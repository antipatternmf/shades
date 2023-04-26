import type { PostModel } from '../../post';
import { PostType } from './post.type';

export class ListPostsType {
  posts?: PostType[];

  constructor(posts?: PostModel[]) {
    if (!posts) {
      return;
    }

    this.posts = posts.map((post) => new PostType(post));
  }
}
