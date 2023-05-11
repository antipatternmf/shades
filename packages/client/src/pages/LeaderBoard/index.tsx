import classNames from 'classnames/bind';
import ArrowBackIcon from 'components/icons/ArrowBackIcon';
import TopBar from 'components/TopBar';
import LoadingOverlay from 'components/LoadingOverlay';
import User from 'pages/LeaderBoard/User';
import { useGetLeaderboard } from './lib/hooks';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function LeaderBoard() {
  const title = 'Доска лидеров';

  const { records, page, totalPages, forward, backward, isLoading } = useGetLeaderboard();

  return (
    <>
      <div className={cx('container', 'shadow')}>
        <TopBar title={title} />

        <div className={cx(styles.leaderboard)}>
          {records.map((record, index) => {
            return (
              <User
                key={record.username}
                place={index + 1}
                name={record.username}
                score={record.score}
              />
            );
          })}
        </div>
        <div className={cx(styles.leaderboardPagination)}>
          <button
            className={cx(
              styles.leaderboardPaginationButton,
              styles.leaderboardPaginationButtonBackward,
              'shadow',
            )}
            disabled={page === 0}
            onClick={backward}
          >
            <ArrowBackIcon />
          </button>

          <div className={cx(styles.leaderboardPaginationPageCounter)}>
            {page + 1} / {totalPages}
          </div>

          <button
            className={cx(
              styles.leaderboardPaginationButton,
              styles.leaderboardPaginationButtonForward,
              'shadow',
            )}
            disabled={page === totalPages - 1}
            onClick={forward}
          >
            <ArrowBackIcon />
          </button>
        </div>
      </div>
      {isLoading && <LoadingOverlay />}
    </>
  );
}

export default LeaderBoard;
