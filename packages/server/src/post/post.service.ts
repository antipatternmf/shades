import type { BaseRestService } from '../core/abstract';
import { ErrorEnum } from '../core/enums';
import type { CreatePostDto } from './dto';
import { PostModel } from './post.model';
import type { WhereOptions } from 'sequelize/types/model';

type CreatPost = CreatePostDto & { ownerId: number };
type DeletePost = { id: number; ownerId: number };
type UpdatePost = Omit<CreatePostDto, 'parentId' | 'threadId'> & { id: number; ownerId: number };
type GetPosts = { limit: number; offset: number; threadId: number; parentId?: number };

export class PostService implements BaseRestService {
  /***
   * Create
   */
  public static create = async ({
    text,
    threadId,
    parentId,
    ownerId,
  }: CreatPost): Promise<PostModel> => {
    if (!text || !threadId) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    return await PostModel.create(
      {
        text,
        threadId,
        parentId,
        ownerId,
      },
      { returning: true },
    );
  };

  /***
   * Delete
   */
  public static delete = async ({ id, ownerId }: DeletePost): Promise<PostModel> => {
    if (!id) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    const post = await PostModel.findOne({
      where: {
        id,
        ownerId,
      },
    });

    if (!post) {
      throw new Error(ErrorEnum.NotFound);
    }

    await post.destroy();
    return post;
  };

  /***
   * Update
   */
  public static update = async ({ id, text, ownerId }: UpdatePost): Promise<PostModel> => {
    if (!text) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    const [_, [post]] = await PostModel.update(
      {
        text,
      },
      {
        where: {
          id,
          ownerId,
        },
        returning: true,
      },
    );

    return post;
  };

  /***
   * Get one
   */
  public static getOne = async (id: number): Promise<PostModel | null> => {
    if (!id) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    return await PostModel.findByPk(id);
  };

  /***
   * Get all
   */
  // todo: Need join!
  public static getAll = async ({
    offset,
    limit,
    threadId,
    parentId,
  }: GetPosts): Promise<PostModel[] | null> => {
    const where: WhereOptions = {
      threadId,
    };
    if (parentId) {
      where.parentId = parentId;
    }

    return await PostModel.findAll({
      where,
      offset,
      limit,
    });
  };
}
