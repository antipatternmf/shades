import { UserType } from './user.type';
import type { ThreadModel } from '../../thread';

export class ThreadType {
  id: number;
  title: string;
  description?: string;
  cover?: string;
  owner: UserType;
  updatedAt: Date;
  createdAt: Date;

  constructor(thread: ThreadModel) {
    this.id = thread.id;
    this.title = thread.title;
    this.description = thread.description ?? '';
    this.cover = thread.cover ?? '';
    this.owner = new UserType(thread.owner!);
    this.updatedAt = new Date(thread.updatedAt ?? null);
    this.createdAt = new Date(thread.createdAt ?? null);
  }
}
