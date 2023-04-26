import { SiteThemeType } from './site-theme.type';
import type { SiteThemeModel } from '../../site-theme';

export class ListSiteThemesType {
  themes?: SiteThemeType[];

  constructor(themes?: SiteThemeModel[]) {
    if (!themes) {
      return;
    }

    this.themes = themes.map((theme) => new SiteThemeType(theme));
  }
}
