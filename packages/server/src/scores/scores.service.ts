import type { BaseRestService } from '../core/abstract';
import { ErrorEnum } from '../core/enums';
import { ScoresModel } from './scores.model';
import { UserModel } from '../user';
import type { AddScoreDto } from './dto';

type AddScore = AddScoreDto & { ownerId: number };
type DeleteScore = { id: number; ownerId: number };
type GetScores = { limit: number; offset: number };

export class ScoresService implements BaseRestService {
  /***
   * Create
   */
  public static create = async ({ score, level, ownerId }: AddScore): Promise<ScoresModel> => {
    if (!score || !level) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    const scoreModel = await ScoresModel.create({
      score,
      level,
      ownerId,
    });

    return (await ScoresService.getOne(scoreModel.id)) as ScoresModel;
  };

  /***
   * Delete
   */
  public static delete = async ({ id, ownerId }: DeleteScore): Promise<ScoresModel> => {
    if (!id) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    const post = await ScoresModel.findOne({
      where: {
        id,
        ownerId,
      },
      include: [UserModel],
    });

    if (!post) {
      throw new Error(ErrorEnum.NotFound);
    }

    await post.destroy();
    return post;
  };

  /***
   * Get one
   */
  public static getOne = async (id: number): Promise<ScoresModel | null> => {
    if (!id) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    return await ScoresModel.findByPk(id, { include: [UserModel] });
  };

  /***
   * Get all
   */
  public static getAll = async ({ offset, limit }: GetScores): Promise<ScoresModel[] | null> => {
    const posts = await ScoresModel.findAll({
      offset,
      limit,
      order: [['createdAt', 'DESC']],
      include: [UserModel],
    });

    return posts;
  };
}
