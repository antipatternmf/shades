import type { BaseRestService } from '../core/abstract';
import { ErrorEnum } from '../core/enums';
import type { CreatePostDto } from './dto';
import { PostModel } from './post.model';
import type { WhereOptions } from 'sequelize/types/model';
import { UserModel } from '../user';
import { EmotionModel } from '../emotion';

type CreatPost = CreatePostDto & { ownerId: number };
type DeletePost = { id: number; ownerId: number };
type UpdatePost = Omit<CreatePostDto, 'parentId' | 'threadId'> & { id: number; ownerId: number };
type GetPosts = { limit: number; offset: number; threadId?: number; parentId?: number };

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

    const post = await PostModel.create({
      text,
      threadId,
      parentId,
      ownerId,
    });

    return (await PostService.getOne(post.id)) as PostModel;
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
      include: [UserModel, EmotionModel],
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

    return (await PostService.getOne(post.id)) as PostModel;
  };

  /***
   * Get one
   */
  public static getOne = async (id: number): Promise<PostModel | null> => {
    if (!id) {
      throw new Error(ErrorEnum.RowsIsEmpty);
    }

    return await PostModel.findByPk(id, {
      include: [{ model: UserModel }, { model: EmotionModel, include: [UserModel] }],
    });
  };

  /***
   * Get all
   */
  public static getAll = async ({ offset, limit, threadId, parentId }: GetPosts) => {
    const where: WhereOptions = {};
    if (parentId) {
      where.parentId = parentId;
    }
    if (threadId) {
      where.threadId = threadId;
      where.parentId = null;
    }

    const [total, posts] = await Promise.all([
      PostModel.count({
        distinct: true,
        col: 'id',
        where,
      }),
      PostModel.findAll({
        where,
        offset,
        limit,
        include: [{ model: UserModel }, { model: EmotionModel, include: [UserModel] }],
      }),
    ]);

    // todo: Да да и еще раз да, лучще оптимизируй запрос выше =)
    for (let i = 0; i < posts?.length ?? 0; i++) {
      posts[i].countAnswers = await PostModel.count({
        where: {
          parentId: posts[i].id,
        },
      });
    }

    return {
      items: posts || [],
      total,
      offset,
      limit,
    };
  };

  public static getCountAnswers = async (parentId: number): Promise<number> => {
    return await PostModel.count({
      where: {
        parentId,
      },
    });
  };
}
