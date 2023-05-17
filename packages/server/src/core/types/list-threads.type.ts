import type { ThreadModel } from '../../thread';
import { ThreadType } from './thread.type';

export class ListThreadsType {
  items: ThreadType[];
  total: number;
  offset: number;
  limit: number;

  constructor(params: { items: ThreadModel[]; total: number; offset: number; limit: number }) {
    this.items = params.items.map((thread) => new ThreadType(thread));
    this.total = params.total;
    this.offset = params.offset;
    this.limit = params.limit;
  }
}
