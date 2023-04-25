import type { Request, Response } from 'express';
import { ListPostsType, PostType, UserType } from '../core/types';
import { ErrorEnum, StatusCodeEnum } from '../core/enums';
import type { CreatePostDto } from './dto';
import { PostService } from './post.service';

const { QUERY_OFFSET, QUERY_LIMIT } = process.env;

export class PostController {
  /***
   * Create
   */
  public static create = async (request: Request, response: Response) => {
    const { body } = request;
    const { text, threadId, parentId, user }: CreatePostDto & { user: UserType } = body;

    try {
      const row = await PostService.create({
        text,
        threadId,
        parentId,
        ownerId: user.id,
      });
      response.status(StatusCodeEnum.SuccessCreated).json(new PostType(row));
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
      const row = await PostService.delete({
        id: parseInt(id, 10),
        ownerId: user.id,
      });
      response.status(StatusCodeEnum.SuccessOK).json(new PostType(row));
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
    const { text, user }: Omit<CreatePostDto, 'parentId' | 'threadId'> & { user: UserType } = body;
    const { id } = params;

    try {
      const row = await PostService.update({
        id: parseInt(id, 10),
        text,
        ownerId: user.id,
      });
      response.status(StatusCodeEnum.SuccessOK).json(new PostType(row));
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
      const row = await PostService.getOne(parseInt(id, 10));
      if (!row) {
        response.status(StatusCodeEnum.ClientErrorNotFound).json();
        return;
      }

      response.status(StatusCodeEnum.SuccessOK).json(new PostType(row));
    } catch (error) {
      console.error(error);
      response.status(StatusCodeEnum.ClientErrorBadRequest).json({ error: ErrorEnum.ServerError });
    }
  };

  /***
   * Get all
   */
  public static getAll = async (request: Request, response: Response) => {
    const { query, params } = request;
    const { offset, limit } = query;
    const { id } = params;

    try {
      const row = await PostService.getAll({
        offset: parseInt((offset ? offset : QUERY_OFFSET) as string, 10),
        limit: parseInt((limit ? limit : QUERY_LIMIT) as string, 10),
        threadId: parseInt(id, 10),
      });
      if (!row) {
        response.status(StatusCodeEnum.ClientErrorNotFound).json();
        return;
      }

      response.status(StatusCodeEnum.SuccessOK).json(new ListPostsType(row));
    } catch (error) {
      console.error(error);
      response.status(StatusCodeEnum.ClientErrorBadRequest).json({ error: ErrorEnum.ServerError });
    }
  };
}
