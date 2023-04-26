import type { ThreadModel } from '../../thread';
import { ThreadType } from './thread.type';

export class ListThreadsType {
  threads?: ThreadType[];

  constructor(threads?: ThreadModel[]) {
    if (!threads) {
      return;
    }

    this.threads = threads.map((thread) => new ThreadType(thread));
  }
}
