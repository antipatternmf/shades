import { fn, col } from 'sequelize';
import { ErrorEnum } from '../core/enums';
import { LevelScoreModel } from './level-score.model';
import type { BaseRestService } from '../core/abstract';
import type {
  AllTotalsDto,
  SaveLevelScoreDto,
  DeleteLevelScoreDto,
  FindLevelScoreDto,
  UpdateLevelScore,
  GetLevelScoresDto,
  GetAllTotalsDto,
  TotalScoreDto,
} from './dto';

export class LevelScoreService implements BaseRestService {
  public static create = async ({
    levelId,
    score,
    username,
  }: SaveLevelScoreDto): Promise<LevelScoreModel> => {
    if (!(levelId && score && username)) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    const scoreRecord = await LevelScoreModel.create({
      username,
      levelId,
      score,
    });

    return (await LevelScoreService.getOne({ id: scoreRecord.id })) as LevelScoreModel;
  };

  public static getOne = async ({
    id,
    username,
    levelId,
  }: FindLevelScoreDto): Promise<LevelScoreModel | null> => {
    if (id) {
      return LevelScoreModel.findByPk(id);
    }

    if (username && levelId) {
      return LevelScoreModel.findOne({
        where: { username, levelId },
      });
    }

    throw new Error(ErrorEnum.RowsIsEmpty);
  };

  public static getAllTotals = async ({
    offset,
    limit,
  }: GetAllTotalsDto): Promise<AllTotalsDto> => {
    const total = await LevelScoreModel.count({
      distinct: true,
      col: 'username',
    });
    const selectedModels = await LevelScoreModel.findAll({
      attributes: ['username', [fn('SUM', col('score')), 'totalScore']],
      group: 'username',
      order: col('totalScore'),
      offset,
      limit,
    });

    const items: TotalScoreDto[] = selectedModels?.map((model) => {
      const dataValues = model.dataValues as unknown as TotalScoreDto;

      return {
        username: dataValues.username,
        totalScore: dataValues.totalScore,
      };
    });

    return {
      items: items || [],
      total,
      offset,
      limit,
    };
  };

  public static getLevelScores = async ({
    username,
  }: GetLevelScoresDto): Promise<LevelScoreModel[]> => {
    if (!username) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    return LevelScoreModel.findAll({
      where: { username },
    });
  };

  public static delete = async ({
    id,
    username,
    levelId,
  }: DeleteLevelScoreDto): Promise<LevelScoreModel> => {
    const record = await LevelScoreService.getOne({ id, username, levelId });

    if (!record) {
      throw new Error(ErrorEnum.NotFound);
    }

    await record.destroy();

    return record;
  };

  public static update = async ({
    id,
    username,
    score,
    levelId,
  }: UpdateLevelScore): Promise<LevelScoreModel> => {
    const record = await LevelScoreService.getOne({ id, username, levelId });

    if (!record) {
      throw new Error(ErrorEnum.NotFound);
    }

    await LevelScoreModel.update({ score }, { where: { id: record.id } });

    return (await LevelScoreService.getOne({ id: record.id })) as LevelScoreModel;
  };
}
