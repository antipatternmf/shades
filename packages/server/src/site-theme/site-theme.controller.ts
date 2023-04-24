import type { Request, Response } from 'express';
import { ListSiteThemesType, SiteThemeType, UserType } from '../core/types';
import { ErrorEnum, StatusCodeEnum } from '../core/enums';
import type { CreateSiteThemeDto } from './dto';
import { SiteThemeService } from './site-theme.service';

const { QUERY_OFFSET, QUERY_LIMIT } = process.env;

export class SiteThemeController {
  /***
   * Create
   */
  public static create = async (request: Request, response: Response) => {
    const { body } = request;
    const { theme, description, user }: CreateSiteThemeDto & { user: UserType } = body;

    try {
      const row = await SiteThemeService.create({
        theme,
        description,
        ownerId: user.id,
      });
      response.status(StatusCodeEnum.SuccessCreated).json(new SiteThemeType(row));
    } catch (error) {
      console.error(error);
      response.status(StatusCodeEnum.ClientErrorBadRequest).json({ error: ErrorEnum.ServerError });
    }
  };

  /***
   * Delete
   */
  public static delete = async (request: Request, response: Response) => {
    const { params } = request;
    const { id } = params;

    try {
      const row = await SiteThemeService.delete({
        id: parseInt(id, 10),
      });
      response.status(StatusCodeEnum.SuccessOK).json(new SiteThemeType(row));
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
    const { theme, description }: CreateSiteThemeDto = body;
    const { id } = params;

    try {
      const row = await SiteThemeService.update({
        id: parseInt(id, 10),
        theme,
        description,
      });
      response.status(StatusCodeEnum.SuccessCreated).json(new SiteThemeType(row));
    } catch (error) {
      console.error(error);
      response.status(StatusCodeEnum.ClientErrorBadRequest).json({ error: ErrorEnum.ServerError });
    }
  };

  /***
   * Get one
   */
  public static getOne = async (request: Request, response: Response) => {
    const { params } = request;
    const { id } = params;

    try {
      const row = await SiteThemeService.getOne(parseInt(id, 10));
      if (!row) {
        response.status(StatusCodeEnum.ClientErrorNotFound).json();
        return;
      }

      response.status(StatusCodeEnum.SuccessCreated).json(new SiteThemeType(row));
    } catch (error) {
      console.error(error);
      response.status(StatusCodeEnum.ClientErrorBadRequest).json({ error: ErrorEnum.ServerError });
    }
  };

  /***
   * Get all
   */
  public static getAll = async (request: Request, response: Response) => {
    const { query } = request;
    const { offset, limit, theme } = query;

    try {
      const row = await SiteThemeService.getAll({
        offset: parseInt((offset ? offset : QUERY_OFFSET) as string, 10),
        limit: parseInt((limit ? limit : QUERY_LIMIT) as string, 10),
        theme: theme as string,
      });
      if (!row) {
        response.status(StatusCodeEnum.ClientErrorNotFound).json();
        return;
      }

      response.status(StatusCodeEnum.SuccessCreated).json(new ListSiteThemesType(row));
    } catch (error) {
      console.error(error);
      response.status(StatusCodeEnum.ClientErrorBadRequest).json({ error: ErrorEnum.ServerError });
    }
  };
}
