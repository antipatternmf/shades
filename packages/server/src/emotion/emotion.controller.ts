import type { Response, Request } from 'express';
import { EmotionService } from './emotion.service';
import { EmotionType } from '../core/types/emotion.type';

export class EmotionController {
  public static create = async (request: Request, response: Response) => {
    const { body } = request;
    console.log('🥝 Body -> ', body);
    const { emotion, postId, user } = body;

    try {
      const row = await EmotionService.create({ emotion, postId }, user);
      response.status(201).json(new EmotionType(row));
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'Server error' });
    }
  };
}
