import type { BaseRestService } from '../core/abstract';
import type { AddEmotionDto } from './dto';
import { EmotionModel } from './emotion.model';

export class EmotionService implements BaseRestService {
  public static create = async ({
    emotion,
    postId,
    ownerId,
  }: AddEmotionDto & { ownerId: number }): Promise<EmotionModel> => {
    if (!emotion || !postId) {
      throw new Error('Rows is empty');
    }

    return await EmotionModel.create(
      {
        emotion,
        postId,
        ownerId,
      },
      { returning: true },
    );
  };

  public static delete = async ({
    id,
    ownerId,
  }: {
    id: number;
    ownerId: number;
  }): Promise<EmotionModel> => {
    if (!id) {
      throw new Error('Rows is empty');
    }

    const emotion = await EmotionModel.findOne({
      where: {
        id,
        ownerId,
      },
    });

    if (!emotion) {
      throw new Error('Emotion not found');
    }

    await emotion.destroy();
    return emotion;
  };
}
