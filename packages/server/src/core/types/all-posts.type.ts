import type { PostModel } from '../../post';
import { PostType } from './post.type';

export class AllPostsType {
  items: PostType[];
  total: number;
  offset: number;
  limit: number;

  constructor(params: { items: PostModel[]; total: number; offset: number; limit: number }) {
    this.items = params.items.map((post) => new PostType(post));
    this.total = params.total;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}
