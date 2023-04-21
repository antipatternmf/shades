import type { BaseRestService } from '../core/abstract';
import { SiteThemeModel } from './site-theme.model';
import type { CreateSiteThemeDto, FindSiteThemeDto } from './dto';

export class SiteThemeService implements BaseRestService {
  public find = ({ id, title }: FindSiteThemeDto) => {
    if (id) {
      return SiteThemeModel.findByPk(id);
    }

    return SiteThemeModel.findOne({
      where: {
        theme: `%${title}%`,
      },
    });
  };

  public create = (data: CreateSiteThemeDto) => {
    return SiteThemeModel.create(data);
  };
}
