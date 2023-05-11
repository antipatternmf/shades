import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import GarbageIcon from 'components/icons/GarbageIcon';
import { trimDesc } from '../lib/trimDesc';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

type ForumItemProps = {
  id: number;
  title: string;
  owner: string;
  desc: string;
  answers: number;
  user?: string;
};

function ForumItem({
  id,
  title,
  owner,
  desc,
  answers,
  user,
}: ForumItemProps) {
  return (
    <div className={cx(styles.forumItem, 'shadow')}>
      <div className={cx(styles.forumItemTitle)}>
        <Link className={cx(styles.forumItemName)} to={`/forum/${id}`}>
          {title}
        </Link>
        <span className={cx(styles.forumItemDesc)}>
          <b>{owner}</b> / {trimDesc(desc)}
        </span>
      </div>
      <div className={cx(styles.forumItemAnswers)}>
        {user === owner ? (
          <button>
            <GarbageIcon />
          </button>
        ) : (
          null
        )}
        <div>
          {answers}
        </div>
      </div>
    </div>
  );
}

export default ForumItem;
