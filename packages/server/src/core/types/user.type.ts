import type { UserModel } from '../../user';

export class UserType {
  id: number;
  email: string;
  login?: string;
  uuid?: string;
  updatedAt: Date;
  createdAt: Date;
  avatar?: string;

  constructor(user: UserModel) {
    this.id = user.id;
    this.email = user.email;
    this.login = user.login ?? '';
    this.uuid = user.uuid ?? '';
    this.updatedAt = new Date(user.updatedAt ?? null);
    this.createdAt = new Date(user.createdAt ?? null);
    this.avatar = user.avatar;
  }
}
