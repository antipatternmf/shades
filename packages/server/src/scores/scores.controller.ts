import type { Request, Response } from 'express';
import type { UserType } from '../core/types';
import { ErrorEnum, StatusCodeEnum } from '../core/enums';
import { ScoresService } from './scores.service';
import type { AddScoreDto } from './dto';
import { ScoreType } from '../core/types/score.type';
import { ListScoresType } from '../core/types/list-scores.type';

const { QUERY_OFFSET, QUERY_LIMIT } = process.env;

export class ScoresController {
  /***
   * Create
   */
  public static create = async (request: Request, response: Response) => {
    const { body } = request;
    const { level, score, user }: AddScoreDto & { user: UserType } = body;

    try {
      const row = await ScoresService.create({
        level,
        score,
        ownerId: user.id,
      });
      response.status(StatusCodeEnum.SuccessCreated).json(new ScoreType(row));
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
      const row = await ScoresService.delete({
        id: parseInt(id, 10),
        ownerId: user.id,
      });
      response.status(StatusCodeEnum.SuccessOK).json(new ScoreType(row));
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
    const { offset, limit } = query;

    try {
      const row = await ScoresService.getAll({
        offset: parseInt((offset ? offset : QUERY_OFFSET) as string, 10),
        limit: parseInt((limit ? limit : QUERY_LIMIT) as string, 10),
      });
      if (!row) {
        response.status(StatusCodeEnum.ClientErrorNotFound).json();
        return;
      }

      response.status(StatusCodeEnum.SuccessOK).json(new ListScoresType(row));
    } catch (error) {
      console.error(error);
      response.status(StatusCodeEnum.ClientErrorBadRequest).json({ error: ErrorEnum.ServerError });
    }
  };
}
