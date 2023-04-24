import type { BaseRestService } from '../core/abstract';
import type { CreateThreadDto } from './dto/create-thread.dto';
import { ThreadModel } from './thread.model';
import { ErrorEnum } from '../core/enums';

type CreatThread = CreateThreadDto & { ownerId: number };
type DeleteThread = { id: number; ownerId: number };
type UpdateThread = CreateThreadDto & { id: number; ownerId: number };
type GetThreads = { limit: number; offset: number; title?: string };

export class ThreadService implements BaseRestService {
  /***
   * Create
   */
  public static create = async ({
    title,
    description,
    cover,
    ownerId,
  }: CreatThread): Promise<ThreadModel> => {
    if (!title) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    return await ThreadModel.create(
      {
        title,
        description,
        cover,
        ownerId,
      },
      { returning: true },
    );
  };

  /***
   * Delete
   */
  public static delete = async ({ id, ownerId }: DeleteThread): Promise<ThreadModel> => {
    if (!id) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    const thread = await ThreadModel.findOne({
      where: {
        id,
        ownerId,
      },
    });

    if (!thread) {
      throw new Error(ErrorEnum.NotFound);
    }

    await thread.destroy();
    return thread;
  };

  /***
   * Update
   */
  public static update = async ({
    id,
    title,
    description,
    cover,
    ownerId,
  }: UpdateThread): Promise<ThreadModel> => {
    if (!title) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    const [_, [thread]] = await ThreadModel.update(
      {
        title,
        description,
        cover,
      },
      {
        where: {
          id,
          ownerId,
        },
        returning: true,
      },
    );

    return thread;
  };

  /***
   * Get one
   */
  public static getOne = async (id: number): Promise<ThreadModel | null> => {
    if (!id) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    return await ThreadModel.findByPk(id);
  };

  /***
   * Get all
   */
  public static getAll = async ({
    offset,
    limit,
    title,
  }: GetThreads): Promise<ThreadModel[] | null> => {
    return await ThreadModel.findAll({
      where: title ? { title: `%${title}%` } : {},
      offset,
      limit,
    });
  };
}
