import type { BaseRestService } from '../core/abstract';
import type { AddEmotionDto } from './dto';
import { EmotionModel } from './emotion.model';
import type { UserType } from '../core/types/user.type';

export class EmotionService implements BaseRestService {
  public static create = async (
    { emotion, postId }: AddEmotionDto,
    user: UserType,
  ): Promise<EmotionModel> => {
    if (!emotion || !postId) {
      throw new Error('Rows is empty');
    }

    return await EmotionModel.create(
      {
        emotion,
        postId,
        ownerId: user.id,
      },
      { returning: true },
    );
  };
}
