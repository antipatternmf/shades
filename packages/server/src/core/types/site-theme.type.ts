import type { SiteThemeModel } from '../../site-theme';
import { UserType } from './user.type';

export class SiteThemeType {
  id: number;
  theme: string;
  description?: string;
  owner: UserType;
  updatedAt: Date;
  createdAt: Date;

  constructor(theme: SiteThemeModel) {
    this.id = theme.id;
    this.theme = theme.theme;
    this.description = theme.description ?? '';
    this.owner = new UserType(theme.owner!);
    this.updatedAt = new Date(theme.updatedAt ?? null);
    this.createdAt = new Date(theme.createdAt ?? null);
  }
}
