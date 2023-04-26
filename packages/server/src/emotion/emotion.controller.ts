import type { Response, Request } from 'express';
import { EmotionService } from './emotion.service';
import { EmotionType } from '../core/types';
import { ErrorEnum, StatusCodeEnum } from '../core/enums';

export class EmotionController {
  public static create = async (request: Request, response: Response) => {
    const { body } = request;
    const { emotion, postId, user } = body;

    try {
      const row = await EmotionService.create({
        emotion,
        postId: parseInt(postId, 10),
        ownerId: user.id,
      });
      response.status(StatusCodeEnum.SuccessCreated).json(new EmotionType(row));
    } catch (error) {
      console.error(error);
      response.status(StatusCodeEnum.ClientErrorBadRequest).json({ error: ErrorEnum.ServerError });
    }
  };

  public static delete = async (request: Request, response: Response) => {
    const { body, params } = request;
    const { user } = body;
    const { id } = params;

    try {
      const row = await EmotionService.delete({
        id: parseInt(id, 10),
        ownerId: user.id,
      });
      response.status(StatusCodeEnum.SuccessOK).json(new EmotionType(row));
    } catch (error) {
      console.error(error);
      response.status(StatusCodeEnum.ClientErrorBadRequest).json({ error: ErrorEnum.ServerError });
    }
  };
}
