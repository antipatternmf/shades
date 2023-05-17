import type { PostModel } from '../../post';
import { PostType } from './post.type';

export class AllAnswersType {
  items: PostType[];
  parentId: number;
  total: number;
  offset: number;
  limit: number;

  constructor(params: {
    items: PostModel[];
    parentId: number;
    total: number;
    offset: number;
    limit: number;
  }) {
    this.items = params.items.map((post) => new PostType(post));
    this.parentId = params.parentId;
    this.total = params.total;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}
