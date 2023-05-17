import { threadApi } from 'api/forum';
import { pageNumberToOffsetLimit, totalItemsToTotalPages } from 'utils/pagination';
import { makeOptionsWithAuthHeader } from 'utils/makeOptionsWithAuthHeader';
import { THREADS_PAGE_SIZE } from '../constants';

type GetThreadsParams = {
  page: number;
  userEmail: string;
};

type CreateThreadParams = {
  title: string;
  description?: string;
  userEmail: string;
};

type DeleteThreadParams = {
  id: number;
  userEmail: string;
};

export async function getThreads(params: GetThreadsParams) {
  const { userEmail, page } = params;

  const { offset, limit } = pageNumberToOffsetLimit({
    page,
    pageSize: THREADS_PAGE_SIZE,
  });

  const result = await threadApi.getAllThreads(offset, limit, '', {
    headers: { Authorization: userEmail },
  });

  const { data } = result;
  const totalPages = totalItemsToTotalPages({
    totalItems: data.total,
    pageSize: THREADS_PAGE_SIZE,
  });

  return {
    items: data.items,
    page,
    totalPages,
  };
}

export async function createThread(params: CreateThreadParams) {
  const { title, description, userEmail } = params;

  const result = await threadApi.addThread(
    { title, description },
    { headers: { Authorization: userEmail } },
  );

  return result.data;
}

export async function deleteThread(params: DeleteThreadParams) {
  const result = await threadApi.deleteThread(
    params.id,
    makeOptionsWithAuthHeader(params.userEmail),
  );

  return result.data;
}
