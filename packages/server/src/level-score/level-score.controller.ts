import { ErrorEnum, StatusCodeEnum } from '../core/enums';
import { isString } from '../core/utils';
import { LevelScoreService } from './level-score.service';
import type { Response, Request } from 'express';
import type { LevelScoreDto } from './dto';
import type { LevelScoreModel } from './level-score.model';

const { QUERY_OFFSET, QUERY_LIMIT } = process.env;

function createLevelScoreDto(model: LevelScoreModel): LevelScoreDto {
  return {
    id: model.id,
    levelId: model.levelId,
    username: model.username,
    score: model.score,
  };
}

function handleError(error: unknown, response: Response) {
  if (error instanceof Error) {
    if (error.message === ErrorEnum.NotFound) {
      return response
        .status(StatusCodeEnum.ClientErrorNotFound)
        .json({ error: ErrorEnum.NotFound });
    }

    if (error.message === ErrorEnum.RowsIsEmpty) {
      return response
        .status(StatusCodeEnum.ClientErrorBadRequest)
        .json({ error: ErrorEnum.RowsIsEmpty });
    }
  }

  return response.status(StatusCodeEnum.ServerErrorInternal).json({ error: ErrorEnum.ServerError });
}

export class LevelScoreController {
  public static save = async (request: Request, response: Response) => {
    const { body } = request;
    const { username, levelId, score } = body || {};

    try {
      const currentRecord = await LevelScoreService.getOne({ username, levelId });
      let resultRecord: LevelScoreModel | null = null;

      if (!currentRecord) {
        resultRecord = await LevelScoreService.create({ username, levelId, score });
      } else {
        resultRecord = await LevelScoreService.update({ username, levelId, score });
      }

      response.status(StatusCodeEnum.SuccessOK).json(createLevelScoreDto(resultRecord));
    } catch (error) {
      handleError(error, response);
    }
  };

  public static delete = async (request: Request, response: Response) => {
    const { query } = request;
    const { username, level_id } = query;
    const levelId = Number(level_id);

    if (!(isString(username) && isNaN(levelId))) {
      response.status(StatusCodeEnum.ClientErrorBadRequest).json({ error: ErrorEnum.WrongParams });

      return;
    }

    try {
      const deletedRecord = await LevelScoreService.delete({ username, levelId });

      response.status(StatusCodeEnum.SuccessOK).json(createLevelScoreDto(deletedRecord));
    } catch (error) {
      handleError(error, response);
    }
  };

  public static getAllTotals = async (request: Request, response: Response) => {
    const { query } = request;
    const { offset, limit } = query;

    const actualOffset = parseInt((offset ? offset : `${QUERY_OFFSET}`) as string, 10);
    const actualLimit = parseInt((limit ? limit : `${QUERY_LIMIT}`) as string, 10);

    try {
      const result = await LevelScoreService.getAllTotals({
        offset: actualOffset,
        limit: actualLimit,
      });

      response.status(StatusCodeEnum.SuccessOK).json(result);
    } catch (error) {
      handleError(error, response);
    }
  };

  public static getLevelScores = async (request: Request, response: Response) => {
    const { params } = request;
    const { username } = params;

    try {
      const records = await LevelScoreService.getLevelScores({
        username,
      });

      response.status(StatusCodeEnum.SuccessOK).json(records.map(createLevelScoreDto));
    } catch (error) {
      handleError(error, response);
    }
  };
}
