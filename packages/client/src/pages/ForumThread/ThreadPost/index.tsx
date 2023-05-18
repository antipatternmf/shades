import type { PostType } from 'api/forum';
import classNames from 'classnames/bind';
import LoadingOverlay from 'components/LoadingOverlay';
import { useState } from 'react';
import { selectUser } from 'reducers/user';
import { useAppSelector } from 'store/hooks';
import PostOwner from '../PostOwner';
import EmotionPopUpWithTrigger from './EmotionPopUpWithTrigger';
import EmotionsToPost from './EmotionsToPost';
import { useGetPostReplies, useSelectEmotion } from '../lib/hooks';
import styles from './style.module.pcss';
import commonThreadStyles from '../styles.module.pcss';

type ThreadPostProps = {
  data: PostType;
  answerToPost?: (postId: number, ownerText: string) => void;
  invalidatePost?: (postId: number) => void;
};

const cx = classNames.bind(styles, commonThreadStyles);

export default function ThreadPost({ data, answerToPost, invalidatePost }: ThreadPostProps) {
  const userData = useAppSelector(selectUser.info);

  const selectedEmotion = data.emotions?.find?.(({ owner }) => {
    return userData && owner.login === userData?.login;
  });

  const {
    reachedEnd,
    items: replies,
    isLoading: areRepliesLoading,
    fetchReplies,
    invalidateSingleReply,
  } = useGetPostReplies(data.id);
  const { selectEmotion, isLoading: isSelectEmotionFetching } = useSelectEmotion(
    data.id,
    selectedEmotion,
  );

  const [isDisplayingReplies, setIsDisplayingReplies] = useState(false);

  const isLoading = areRepliesLoading || isSelectEmotionFetching;

  const toggleRepliesDisplaying = async () => {
    if (!isDisplayingReplies && !replies.length) {
      await fetchReplies();
    }

    setIsDisplayingReplies((state) => !state);
  };

  const handleReaction = async (emoji: number) => {
    await selectEmotion(emoji);
    invalidatePost?.(data.id);
  };

  return (
    <>
      <div className={cx(styles.threadPost)}>
        <div className={cx(styles.threadPostHead)}>
          <PostOwner
            name={data.owner.login || ''}
            avatar={data.owner.avatar || ''}
          />

          <div className={cx(styles.threadPostHeadReaction)}>
            {!!answerToPost && (
              <button
                className={cx(commonThreadStyles.threadActionButton)}
                onClick={() => answerToPost(data.id, data.text)}
              >
                Ответить
              </button>
            )}

            <EmotionPopUpWithTrigger
              ownReaction={selectedEmotion ? Number(selectedEmotion.emotion) : undefined}
              onSelect={handleReaction}
            />
          </div>
        </div>

        {!!data.emotions?.length && <EmotionsToPost items={data.emotions} />}

        <div className={cx(styles.threadPostText)}>{data.text}</div>

        {!!data.countAnswers && (
          <div className={cx(styles.threadPostRepliesBlock)}>
            <button
              className={cx(commonThreadStyles.threadActionButton)}
              onClick={toggleRepliesDisplaying}
            >
              {isDisplayingReplies ? 'Скрыть ответы' : 'Показать ответы'}
            </button>

            {isDisplayingReplies && (
              <div className={cx(styles.threadPostRepliesBlockList)}>
                {replies.map((replyData) => (
                  <ThreadPost
                    key={replyData.id}
                    data={replyData}
                    invalidatePost={invalidateSingleReply}
                  />
                ))}

                {!reachedEnd && (
                  <button
                    className={cx(
                      commonThreadStyles.threadActionButton,
                      styles.threadPostRepliesBlockListLoadMoreButton,
                    )}
                    onClick={fetchReplies}
                  >
                    Ещё
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {isLoading && <LoadingOverlay />}
    </>
  );
}
