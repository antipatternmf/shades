import type { Request, Response } from 'express';
import { UserThemeType, UserType } from '../core/types';
import { ErrorEnum, StatusCodeEnum } from '../core/enums';
import type { SelectUserThemeDto } from './dto/select-user-theme.dto';
import { UserThemeService } from './user-theme.service';

export class UserThemeController {
  /***
   * Create
   */
  public static create = async (request: Request, response: Response) => {
    const { body } = request;
    const { themeId, user }: SelectUserThemeDto & { user: UserType } = body;

    try {
      const row = await UserThemeService.create({
        themeId,
        ownerId: user.id,
      });
      response.status(StatusCodeEnum.SuccessCreated).json(new UserThemeType(row));
    } catch (error) {
      console.error(error);
      response.status(StatusCodeEnum.ClientErrorBadRequest).json({ error: ErrorEnum.ServerError });
    }
  };

  /***
   * Delete
   */
  public static delete = async (request: Request, response: Response) => {
    const { body, params } = request;
    const { user } = body;
    const { id } = params;

    try {
      const row = await UserThemeService.delete({
        id: parseInt(id, 10),
        ownerId: user.id,
      });
      response.status(StatusCodeEnum.SuccessOK).json(new UserThemeType(row));
    } catch (error) {
      console.error(error);
      response.status(StatusCodeEnum.ClientErrorBadRequest).json({ error: ErrorEnum.ServerError });
    }
  };

  /***
   * Update
   */
  public static update = async (request: Request, response: Response) => {
    const { body, params } = request;
    const { themeId, user }: SelectUserThemeDto & { user: UserType } = body;
    const { id } = params;

    try {
      const row = await UserThemeService.update({
        id: parseInt(id, 10),
        themeId: themeId,
        ownerId: user.id,
      });
      response.status(StatusCodeEnum.SuccessOK).json(new UserThemeType(row));
    } catch (error) {
      console.error(error);
      response.status(StatusCodeEnum.ClientErrorBadRequest).json({ error: ErrorEnum.ServerError });
    }
  };

  /***
   * Get
   */
  public static getByUser = async (request: Request, response: Response) => {
    const { body } = request;
    const { user }: { user: UserType } = body;

    try {
      const row = await UserThemeService.getOneByUser(user.id);
      if (!row) {
        response.status(StatusCodeEnum.ClientErrorNotFound).json();
        return;
      }

      response.status(StatusCodeEnum.SuccessOK).json(new UserThemeType(row));
    } catch (error) {
      console.error(error);
      response.status(StatusCodeEnum.ClientErrorBadRequest).json({ error: ErrorEnum.ServerError });
    }
  };
}
