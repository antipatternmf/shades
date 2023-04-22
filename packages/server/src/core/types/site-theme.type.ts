import type { SiteThemeModel } from '../../site-theme';

export class SiteThemeType {
  id: number;
  theme: string;
  description?: string;
  updatedAt: Date;
  createdAt: Date;

  constructor(theme: SiteThemeModel) {
    this.id = theme.id;
    this.theme = theme.theme;
    this.description = theme.description ?? '';
    this.updatedAt = new Date(theme.updatedAt ?? null);
    this.createdAt = new Date(theme.createdAt ?? null);
  }
}
