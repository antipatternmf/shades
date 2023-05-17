import type { ThreadType, PostType, EmotionType } from 'api/forum';
import { useState, useEffect, useCallback } from 'react';
import { selectUser } from 'reducers/user';
import { useAppSelector } from 'store/hooks';
import {
  getThreadData,
  getThreadPosts,
  sendThreadPost,
  getPostReplies,
  addEmotionToPost,
  removeEmotion,
  getPost,
  type SendThreadPostParams,
} from './queries';

function isValidThreadId(value: unknown) {
  return typeof value === 'number' && !Number.isNaN(value);
}

export function useGetThreadData(threadId: number) {
  const userEmail = useAppSelector(selectUser.email) || '';

  const [data, setData] = useState<ThreadType | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isValidThreadId(threadId) || !userEmail) {
      return;
    }

    setIsLoading(true);

    getThreadData({ threadId, userEmail })
      .then((response) => setData(response))
      .finally(() => setIsLoading(false));
  }, [threadId, userEmail]);

  return { data, isLoading };
}

export function useGetThreadPosts(threadId: number) {
  const userEmail = useAppSelector(selectUser.email) || '';

  const [items, setItems] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const fetchThreadPosts = useCallback(async () => {
    if (!isValidThreadId(threadId)) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await getThreadPosts({
        threadId,
        page: currentPage,
        userEmail,
      });

      setItems(response.items);
      setTotalPages(response.totalPages);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, threadId, userEmail]);

  const goToPage = useCallback((nextPage: number) => {
    setCurrentPage(nextPage);
  }, []);

  useEffect(() => {
    fetchThreadPosts();
  }, [fetchThreadPosts]);

  return {
    items,
    page: currentPage,
    totalPages,
    goToPage,
    isLoading,
    invalidate: fetchThreadPosts,
  };
}

export function useSendThreadPost(threadId: number) {
  const userEmail = useAppSelector(selectUser.email) || '';
  const [isLoading, setIsLoading] = useState(false);

  const sendPost = useCallback(
    (params: Omit<SendThreadPostParams, 'threadId' | 'userEmail'>) => {
      const { text, parentPostId } = params;

      setIsLoading(true);

      try {
        return sendThreadPost({ text, parentPostId, threadId, userEmail });
      } catch {
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [threadId, userEmail],
  );

  return {
    sendPost,
    isLoading,
  };
}

export function useGetPostReplies(parentPostId: number) {
  const [items, setItems] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const pageSize = 15;

  const reachedEnd = !!items.length && totalItems <= items.length;

  const fetchReplies = async () => {
    if (reachedEnd) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await getPostReplies({
        parentPostId,
        offset: items.length,
        limit: pageSize,
      });

      setItems((currentItems) => [...currentItems, ...response.items]);
      setTotalItems(response.total);
    } finally {
      setIsLoading(false);
    }
  };

  const invalidateSingleReply = async (replyId: number) => {
    const replyIndex = items.findIndex(({ id }) => replyId === id);
    const reply = items[replyIndex];

    if (!reply) {
      return;
    }

    setIsLoading(true);

    try {
      const invalidatedPost = await getPost({ postId: reply.id });

      setItems((currentItems) => {
        return currentItems.map((post) => {
          if (post.id === invalidatedPost.id) {
            return invalidatedPost;
          }

          return post;
        });
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    items,
    fetchReplies,
    invalidateSingleReply,
    reachedEnd,
    isLoading,
  };
}

export function useSelectEmotion(postId: number, currentEmotion: EmotionType | undefined) {
  const userEmail = useAppSelector(selectUser.email) || '';
  const [isLoading, setIsLoading] = useState(false);

  const selectEmotion = async (newEmotion: number) => {
    setIsLoading(true);

    try {
      if (currentEmotion) {
        const removedEmotion = await removeEmotion({
          emotionId: currentEmotion.id,
          userEmail,
        });

        if (!removedEmotion) {
          return;
        }
      }

      if (String(newEmotion) !== currentEmotion?.emotion) {
        await addEmotionToPost({
          emotion: newEmotion,
          postId,
          userEmail,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { selectEmotion, isLoading };
}
