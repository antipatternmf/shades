import type { BaseRestService } from '../core/abstract';
import type { AddEmotionDto } from './dto';
import { EmotionModel } from './emotion.model';
import { ErrorEnum } from '../core/enums';

type CreateEmotion = AddEmotionDto & { ownerId: number };
type DeleteEmotion = { id: number; ownerId: number };

export class EmotionService implements BaseRestService {
  public static create = async ({
    emotion,
    postId,
    ownerId,
  }: CreateEmotion): Promise<EmotionModel> => {
    if (!emotion || !postId) {
      throw new Error(ErrorEnum.RowsIsEmpty);
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

  public static delete = async ({ id, ownerId }: DeleteEmotion): Promise<EmotionModel> => {
    if (!id) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    const emotion = await EmotionModel.findOne({
      where: {
        id,
        ownerId,
      },
    });

    if (!emotion) {
      throw new Error(ErrorEnum.NotFound);
    }

    await emotion.destroy();
    return emotion;
  };
}
