import { useState } from 'react';
import classNames from 'classnames/bind';
import TopBar from 'components/TopBar';
import Modal from 'components/Modal';
import PageSelect from 'components/PageSelect';
import LoadingOverlay from 'components/LoadingOverlay';
import CrossIcon from 'components/icons/CrossIcon';
import NotFoundIcon from 'components/icons/NotFoundIcon';
import ForumItem from 'pages/Forum/ForumItem';
import CreateThreadForm from 'pages/Forum/CreateThreadForm';
import styles from 'pages/Forum/style.module.pcss';
import { useGetThreadsList } from './lib/hooks';

const cx = classNames.bind(styles);

export default function ForumPage() {
  const title = 'Форум';
  const [isCreateThreadModalOpen, setIsCreateThreadModalOpen] = useState(false);

  const { items, isLoading, invalidate, totalPages, goToPage, page } = useGetThreadsList();

  const openCreateThreadModal = () => {
    setIsCreateThreadModalOpen(true);
  };

  const closeCreateThreadModal = () => {
    setIsCreateThreadModalOpen(false);
  };

  const onForumCreation = async () => {
    closeCreateThreadModal();
    await invalidate();
  };

  return (
    <div className={cx(styles.forumPageContainer)}>
      <div className={cx(styles.forumPageBlockContainer, 'shadow', styles.forumMainBlock)}>
        <TopBar
          title={title}
          rightElement={
            <div className={cx(styles.forumAddTopic)}>
              <span>Создать тему</span>
              <button
                className={cx('shadow')}
                onClick={openCreateThreadModal}
              >
                <CrossIcon />
              </button>
            </div>
          }
        />

        <div className={cx(styles.forum)}>
          <Modal isOpen={isCreateThreadModalOpen}>
            <CreateThreadForm
              onSubmit={onForumCreation}
              onCancel={closeCreateThreadModal}
            />
          </Modal>

          {!isLoading && !!items.length && (
            <>
              <div className={cx(styles.forumHead)}>
                <span>Тема</span>
              </div>

              <div className={cx(styles.forumBody, items.length > 4 ? styles.scroll : '')}>
                {items.map((item) => (
                  <ForumItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    ownerLogin={item.owner.login}
                    description={item.description || ''}
                    onDelete={invalidate}
                  />
                ))}
              </div>
            </>
          )}

          {!isLoading && !items.length && (
            <div className={cx(styles.forumNotFound)}>
              <NotFoundIcon />
              <span>Темы не найдены</span>
            </div>
          )}
        </div>
        {isLoading && <LoadingOverlay />}
      </div>

      {totalPages > 1 && (
        <div
          className={cx(styles.forumPaginationWrapper, styles.forumPageBlockContainer, 'shadow')}
        >
          <PageSelect
            currentPage={page}
            totalPages={totalPages}
            onPageSelect={goToPage}
          />
        </div>
      )}
    </div>
  );
}
