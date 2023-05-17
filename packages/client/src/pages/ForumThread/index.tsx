import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import LoadingOverlay from 'components/LoadingOverlay';
import TopBar from 'components/TopBar';
import PageSelect from 'components/PageSelect';
import { useState, useCallback } from 'react';
import { useGetThreadData, useGetThreadPosts } from './lib/hooks';
import PostOwner from './PostOwner';
import PostTextArea from './PostTextArea';
import ThreadPost from './ThreadPost';
import styles from './styles.module.pcss';

const cx = classNames.bind(styles);

export default function ForumThreadPage() {
  const threadID = Number(useParams().threadId);

  const [replyingTo, setReplyingTo] = useState<{ id: number; login: string } | undefined>();

  const { data, isLoading: isThreadDataLoading } = useGetThreadData(threadID);
  const {
    items: posts,
    isLoading: arePostsLoading,
    page,
    totalPages,
    goToPage,
    invalidate,
  } = useGetThreadPosts(threadID);

  const onNewPostSend = async () => {
    await invalidate();
  };

  const isLoading = isThreadDataLoading || arePostsLoading;

  const replyToPost = useCallback((postId: number, ownerLogin: string) => {
    setReplyingTo({ id: postId, login: ownerLogin });
  }, []);

  return (
    <div className={cx(styles.threadPageContainer)}>
      <div className={cx(styles.threadPageBlockContainer, styles.threadMainBlock, 'shadow')}>
        <TopBar title={data?.title || ''} />

        <div className={cx(styles.thread)}>
          <div className={cx(styles.threadInnerContainer)}>
            <div className={cx(styles.threadScrollableContainer)}>
              <div className={cx(styles.threadHeadInfo)}>
                <PostOwner
                  name={data?.owner.login || ''}
                  avatar={data?.owner.avatar || ''}
                />
                <p className={cx(styles.threadHeadInfoDescription)}>{data?.description}</p>
              </div>

              {posts.map((postData) => (
                <ThreadPost
                  key={postData.id}
                  data={postData}
                  answerToPost={replyToPost}
                  invalidatePost={invalidate}
                />
              ))}
            </div>

            <PostTextArea
              threadId={threadID}
              replyingTo={replyingTo}
              cancelReply={() => setReplyingTo(undefined)}
              onSuccess={onNewPostSend}
            />
          </div>
        </div>
      </div>

      {totalPages > 1 && (
        <div
          className={cx(styles.threadPageBlockContainer, styles.threadPaginationWrapper, 'shadow')}
        >
          <PageSelect
            totalPages={totalPages}
            currentPage={page}
            onPageSelect={goToPage}
          />
        </div>
      )}

      {isLoading && <LoadingOverlay />}
    </div>
  );
}
