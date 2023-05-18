import { threadApi, postsApi, emotionsApi, type PostType } from 'api/forum';
import {
  pageNumberToOffsetLimit,
  totalItemsToTotalPages,
  offsetToPaginationParams,
} from 'utils/pagination';
import { transformAvatarUrl } from 'utils/transformAvatarUrl';
import { makeOptionsWithAuthHeader } from 'utils/makeOptionsWithAuthHeader';
import { THREAD_POSTS_PAGE_SIZE } from '../constants';

type GetThreadDataParams = {
  threadId: number;
  userEmail: string;
};

type GetThreadPostsParams = {
  threadId: number;
  page: number;
  userEmail: string;
};

export type SendThreadPostParams = {
  userEmail: string;
  text: string;
  threadId: number;
  parentPostId?: number;
};

type GetPostRepliesParams = {
  parentPostId: number;
  offset: number;
  limit: number;
};

type AddEmotionToPostParams = {
  postId: number;
  emotion: number;
  userEmail: string;
};

type RemoveEmotionFromPostParams = {
  emotionId: number;
  userEmail: string;
};

type GetPostParams = {
  postId: number;
};

function adaptAvatarInPost(post: PostType): PostType {
  const adaptedAvatar = post.owner.avatar ? transformAvatarUrl(post.owner.avatar) : undefined;

  return {
    ...post,
    owner: {
      ...post.owner,
      avatar: adaptedAvatar,
    },
  };
}

export async function getThreadData(params: GetThreadDataParams) {
  const { threadId, userEmail } = params;
  const response = await threadApi.getOneThread(threadId, makeOptionsWithAuthHeader(userEmail));
  const { data } = response;

  data.owner.avatar = data.owner.avatar ? transformAvatarUrl(data.owner.avatar) : '';

  return response.data;
}

export async function getThreadPosts(params: GetThreadPostsParams) {
  const { threadId, page, userEmail } = params;
  const { offset, limit } = pageNumberToOffsetLimit({ page, pageSize: THREAD_POSTS_PAGE_SIZE });

  const response = await postsApi.getAllPostsOfThread(
    threadId,
    offset,
    limit,
    makeOptionsWithAuthHeader(userEmail),
  );

  const { data } = response;

  return {
    items: data.items.map(adaptAvatarInPost),
    page: offsetToPaginationParams({ offset: data.offset, pageSize: data.limit }),
    totalPages: totalItemsToTotalPages({ totalItems: data.total, pageSize: data.limit }),
  };
}

export async function sendThreadPost(params: SendThreadPostParams) {
  const { text, threadId, parentPostId, userEmail } = params;

  const response = await postsApi.addPost(
    {
      text,
      threadId,
      parentId: parentPostId,
    },
    makeOptionsWithAuthHeader(userEmail),
  );

  return adaptAvatarInPost(response.data);
}

export async function getPostReplies(params: GetPostRepliesParams) {
  const { parentPostId } = params;
  const response = await postsApi.getAllAnswersOfPosts(parentPostId);

  return {
    ...response.data,
    items: response.data.items.map(adaptAvatarInPost),
  };
}

export async function getPost(params: GetPostParams) {
  const { postId } = params;

  const response = await postsApi.getOnePost(postId);

  return adaptAvatarInPost(response.data);
}

export async function addEmotionToPost(params: AddEmotionToPostParams) {
  const { emotion, postId, userEmail } = params;

  const response = await emotionsApi.addEmotion(
    { emotion: String(emotion), postId },
    makeOptionsWithAuthHeader(userEmail),
  );

  return response.data;
}

export async function removeEmotion(params: RemoveEmotionFromPostParams) {
  const { emotionId, userEmail } = params;
  const response = await emotionsApi.deleteEmotion(emotionId, makeOptionsWithAuthHeader(userEmail));

  return response.data;
}
