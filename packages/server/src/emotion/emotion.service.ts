import type { BaseRestService } from '../core/abstract';
import type { AddEmotionDto } from './dto';
import { EmotionModel } from './emotion.model';
import { ErrorEnum } from '../core/enums';
import { UserModel } from '../user';

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

    const emo = await EmotionModel.create({
      emotion,
      postId,
      ownerId,
    });

    return (await EmotionService.getOne(emo.id)) as EmotionModel;
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
      include: [UserModel],
    });

    if (!emotion) {
      throw new Error(ErrorEnum.NotFound);
    }

    await emotion.destroy();
    return emotion;
  };

  /***
   * Get one
   */
  public static getOne = async (id: number): Promise<EmotionModel | null> => {
    if (!id) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    return await EmotionModel.findByPk(id, { include: [UserModel] });
  };
}
