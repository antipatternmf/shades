import type { BaseRestService } from '../core/abstract';
import { ErrorEnum } from '../core/enums';
import type { CreateSiteThemeDto } from './dto';
import { SiteThemeModel } from './site-theme.model';
import { UserModel } from '../user';

type CreatSiteTheme = CreateSiteThemeDto & { ownerId: number };
type DeleteSiteTheme = { id: number }; // Типа все супер-юзеры =)
type UpdateSiteTheme = CreateSiteThemeDto & { id: number };
type GetSiteThemes = { limit: number; offset: number; theme?: string };

export class SiteThemeService implements BaseRestService {
  /***
   * Create
   */
  public static create = async ({
    theme,
    description,
    ownerId,
  }: CreatSiteTheme): Promise<SiteThemeModel> => {
    if (!theme) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    const siteTheme = await SiteThemeModel.create({
      theme,
      description,
      ownerId,
    });

    return (await SiteThemeService.getOne(siteTheme.id)) as SiteThemeModel;
  };

  /***
   * Delete
   */
  public static delete = async ({ id }: DeleteSiteTheme): Promise<SiteThemeModel> => {
    if (!id) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    const siteTheme = await SiteThemeModel.findByPk(id, { include: [UserModel] });

    if (!siteTheme) {
      throw new Error(ErrorEnum.NotFound);
    }

    await siteTheme.destroy();
    return siteTheme;
  };

  /***
   * Update
   */
  public static update = async ({
    id,
    theme,
    description,
  }: UpdateSiteTheme): Promise<SiteThemeModel> => {
    if (!theme) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    const [_, [siteTheme]] = await SiteThemeModel.update(
      {
        theme,
        description,
      },
      {
        where: {
          id,
        },
        returning: true,
      },
    );

    return (await SiteThemeService.getOne(siteTheme.id)) as SiteThemeModel;
  };

  /***
   * Get one
   */
  public static getOne = async (id: number): Promise<SiteThemeModel | null> => {
    if (!id) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    return await SiteThemeModel.findByPk(id, { include: [UserModel] });
  };

  /***
   * Get all
   */
  public static getAll = async ({
    offset,
    limit,
    theme,
  }: GetSiteThemes): Promise<SiteThemeModel[] | null> => {
    return await SiteThemeModel.findAll({
      where: theme ? { title: `%${theme}%` } : {},
      offset,
      limit,
      include: [UserModel],
    });
  };
}
