import type { BaseRestService } from '../core/abstract';
import { ErrorEnum } from '../core/enums';
import { UserThemeModel } from './user-theme.model';
import type { SelectUserThemeDto } from './dto/select-user-theme.dto';
import { UserModel } from '../user';
import { SiteThemeModel } from '../site-theme';

type CreatUserTheme = SelectUserThemeDto & { ownerId: number };
type DeleteUserTheme = { id: number; ownerId: number };
type UpdateUserTheme = SelectUserThemeDto & { id: number; ownerId: number };

export class UserThemeService implements BaseRestService {
  /***
   * Create
   */
  public static create = async ({ themeId, ownerId }: CreatUserTheme): Promise<UserThemeModel> => {
    if (!themeId) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    const userTheme = await UserThemeModel.create({
      themeId,
      ownerId,
    });

    return (await UserThemeService.getOne(userTheme.id)) as UserThemeModel;
  };

  /***
   * Delete
   */
  public static delete = async ({ id, ownerId }: DeleteUserTheme): Promise<UserThemeModel> => {
    if (!id) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    const userTheme = await UserThemeModel.findOne({
      where: {
        id,
        ownerId,
      },
      include: [UserModel, SiteThemeModel],
    });

    if (!userTheme) {
      throw new Error(ErrorEnum.NotFound);
    }

    await userTheme.destroy();
    return userTheme;
  };

  /***
   * Update
   */
  public static update = async ({
    themeId,
    id,
    ownerId,
  }: UpdateUserTheme): Promise<UserThemeModel> => {
    if (!themeId) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    const [_, [userTheme]] = await UserThemeModel.update(
      {
        themeId,
      },
      {
        where: {
          id,
          ownerId,
        },
        returning: true,
      },
    );

    return (await UserThemeService.getOne(userTheme.id)) as UserThemeModel;
  };

  /***
   * Get one
   */
  public static getOne = async (id: number): Promise<UserThemeModel | null> => {
    if (!id) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    return await UserThemeModel.findByPk(id, { include: [UserModel, SiteThemeModel] });
  };
  /***
   * Get one by user
   */
  public static getOneByUser = async (id: number): Promise<UserThemeModel | null> => {
    if (!id) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    return await UserThemeModel.findOne({
      where: {
        ownerId: id,
      },
      include: [UserModel, SiteThemeModel],
    });
  };
}
