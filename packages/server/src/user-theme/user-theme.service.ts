import type { BaseRestService } from '../core/abstract';
import { ErrorEnum } from '../core/enums';
import { UserThemeModel } from './user-theme.model';
import type { SelectUserThemeDto } from './dto/select-user-theme.dto';

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

    return await UserThemeModel.create(
      {
        themeId,
        ownerId,
      },
      { returning: true },
    );
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

    return userTheme;
  };

  /***
   * Get one
   */
  public static getOne = async (id: number): Promise<UserThemeModel | null> => {
    if (!id) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    return await UserThemeModel.findByPk(id);
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
    });
  };
}
