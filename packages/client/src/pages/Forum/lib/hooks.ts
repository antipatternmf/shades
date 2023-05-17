import type { ThreadType } from 'api/forum';
import { useEffect, useState, useCallback } from 'react';
import { selectUser } from 'reducers/user';
import { useAppSelector } from 'store/hooks';
import { createThread, getThreads, deleteThread as deleteThreadQuery } from './queries';

export function useGetThreadsList() {
  const userEmail = useAppSelector(selectUser.email) || '';

  const [items, setItems] = useState<ThreadType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const goToPage = useCallback((nextPage: number) => {
    setCurrentPage(nextPage);
  }, []);

  const fetchThreads = useCallback(async () => {
    if (!userEmail) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await getThreads({ page: currentPage, userEmail });

      setItems(response.items);
      setTotalPages(response.totalPages);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, userEmail]);

  useEffect(() => {
    fetchThreads();
  }, [fetchThreads]);

  return {
    items,
    page: currentPage,
    totalPages,
    goToPage,
    isLoading,
    invalidate: fetchThreads,
  };
}

export function useCreateThread() {
  const userEmail = useAppSelector(selectUser.email) || '';

  const [data, setData] = useState<ThreadType | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(undefined);

  const post = useCallback(
    async (params: { title: string; description: string }) => {
      try {
        setIsLoading(true);
        const response = await createThread({ ...params, userEmail });
        setData(response);
      } catch (requestError) {
        setError(requestError);
      } finally {
        setIsLoading(false);
      }
    },
    [userEmail],
  );

  return { post, data, isLoading, error };
}

export function useDeleteThread() {
  const userEmail = useAppSelector(selectUser.email) || '';
  const [isLoading, setIsLoading] = useState(false);

  const deleteThread = async (id: number) => {
    setIsLoading(true);

    try {
      await deleteThreadQuery({ id, userEmail });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    deleteThread,
    isLoading,
  };
}
