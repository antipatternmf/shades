import type { Response, Request } from 'express';
import { EmotionService } from './emotion.service';
import { EmotionType } from '../core/types/emotion.type';

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
      response.status(201).json(new EmotionType(row));
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'Server error' });
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
      response.status(200).json(new EmotionType(row));
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: 'Server error' });
    }
  };
}
