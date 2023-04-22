import type { UserThemeModel } from '../../user-theme';
import { SiteThemeType } from './site-theme.type';
import { UserType } from './user.type';

export class UserThemeType {
  id: number;
  device: string;
  theme: SiteThemeType;
  owner: UserType;
  updatedAt: Date;
  createdAt: Date;

  constructor(theme: UserThemeModel) {
    this.id = theme.id;
    this.device = theme.device;
    this.theme = new SiteThemeType(theme.theme!);
    this.owner = new UserType(theme.owner!);
    this.updatedAt = new Date(theme.updatedAt ?? null);
    this.createdAt = new Date(theme.createdAt ?? null);
  }
}
