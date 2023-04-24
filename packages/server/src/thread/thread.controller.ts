import type { Request, Response } from 'express';
import { ErrorEnum, StatusCodeEnum } from '../core/enums';
import { ListThreadsType, ThreadType, UserType } from '../core/types';
import type { CreateThreadDto } from './dto';
import { ThreadService } from './thread.service';

const { QUERY_OFFSET, QUERY_LIMIT } = process.env;

export class ThreadController {
  /***
   * Create
   */
  public static create = async (request: Request, response: Response) => {
    const { body } = request;
    const { title, description, cover, user }: CreateThreadDto & { user: UserType } = body;

    try {
      const row = await ThreadService.create({
        title,
        description,
        cover,
        ownerId: user.id,
      });

      response.status(StatusCodeEnum.SuccessCreated).json(new ThreadType(row));
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
      const row = await ThreadService.delete({
        id: parseInt(id, 10),
        ownerId: user.id,
      });
      response.status(StatusCodeEnum.SuccessOK).json(new ThreadType(row));
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
    const { title, description, cover, user }: CreateThreadDto & { user: UserType } = body;
    const { id } = params;

    try {
      const row = await ThreadService.update({
        id: parseInt(id, 10),
        title,
        description,
        cover,
        ownerId: user.id,
      });
      response.status(StatusCodeEnum.SuccessCreated).json(new ThreadType(row));
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
      const row = await ThreadService.getOne(parseInt(id, 10));
      if (!row) {
        response.status(StatusCodeEnum.ClientErrorNotFound).json();
        return;
      }

      response.status(StatusCodeEnum.SuccessCreated).json(new ThreadType(row));
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
    const { offset, limit, title } = query;

    try {
      const row = await ThreadService.getAll({
        offset: parseInt((offset ? offset : QUERY_OFFSET) as string, 10),
        limit: parseInt((limit ? limit : QUERY_LIMIT) as string, 10),
        title: title as string,
      });
      if (!row) {
        response.status(StatusCodeEnum.ClientErrorNotFound).json();
        return;
      }

      response.status(StatusCodeEnum.SuccessCreated).json(new ListThreadsType(row));
    } catch (error) {
      console.error(error);
      response.status(StatusCodeEnum.ClientErrorBadRequest).json({ error: ErrorEnum.ServerError });
    }
  };
}
