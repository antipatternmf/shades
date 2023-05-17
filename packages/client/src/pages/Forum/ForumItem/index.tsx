import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import GarbageIcon from 'components/icons/GarbageIcon';
import LoadingOverlay from 'components/LoadingOverlay';
import Join from 'components/Join';
import { useAppSelector } from 'store/hooks';
import { useDeleteThread } from '../lib/hooks';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

type ForumItemProps = {
  id: number;
  title: string;
  ownerLogin: string;
  description: string;
  answers?: number;
  onDelete?: () => void;
};

function ForumItem({ id, title, ownerLogin, description, answers, onDelete }: ForumItemProps) {
  const userLogin = useAppSelector((state) => state.user.data?.login);
  const { deleteThread, isLoading: isDeletingThread } = useDeleteThread();

  const handleDeleteButtonClick = async () => {
    await deleteThread(id);
    onDelete?.();
  };

  return (
    <>
      <div className={cx(styles.forumItem, 'shadow')}>
        <div className={cx(styles.forumItemTitle)}>
          <Link
            className={cx(styles.forumItemName)}
            to={`/forum/${id}`}
          >
            {title}
          </Link>
          <span className={cx(styles.forumItemDesc)}>
            <Join separator=" / ">
              {ownerLogin && <b>{ownerLogin}</b>}
              {description}
            </Join>
          </span>
        </div>
        <div className={cx(styles.forumItemAnswers)}>
          {userLogin === ownerLogin ? (
            <button onClick={handleDeleteButtonClick}>
              <GarbageIcon />
            </button>
          ) : null}
          {!!answers && <div>{answers}</div>}
        </div>
      </div>
      {isDeletingThread && <LoadingOverlay />}
    </>
  );
}

export default ForumItem;
