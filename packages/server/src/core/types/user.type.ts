import type { UserModel } from '../../user';

export class UserType {
  id: number;
  email: string;
  login?: string;
  uuid?: string;
  authCookie?: string;
  updatedAt: Date;
  createdAt: Date;

  constructor(user: UserModel) {
    this.id = user.id;
    this.email = user.email;
    this.login = user.login ?? '';
    this.uuid = user.uuid ?? '';
    this.authCookie = user.authCookie ?? '';
    this.updatedAt = new Date(user.updatedAt ?? null);
    this.createdAt = new Date(user.createdAt ?? null);
  }
}
