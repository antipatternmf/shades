import classNames from 'classnames/bind';
import ArrowBackIcon from 'components/icons/ArrowBackIcon';
import PlayIcon from 'components/icons/PlayIcon';
import RefreshIcon from 'components/icons/RefreshIcon';
import { RatingStars } from 'components/RatingStars';
import { useNavigate } from 'react-router-dom';
import { GameStatus } from 'reducers/game';
import styles from '../../style.module.pcss';

const cx = classNames.bind(styles);

type ResultsModalContentProps = {
  rating: number;
  status: GameStatus;
  goToNextLevel: () => void;
  restartLevel: () => void;
};

function selectTitle(status: GameStatus) {
  switch (status) {
    case 'win':
      return 'Well done!';
    case 'lose':
      return 'Good luck next time';
    default:
      return '';
  }
}

export function ResultsModalContent({
  rating,
  status,
  goToNextLevel,
  restartLevel,
}: ResultsModalContentProps) {
  const navigate = useNavigate();

  return (
    <div className={cx(styles.endGame)}>
      <span className={cx(styles.endGame__title)}>{selectTitle(status)}</span>
      <div className={cx(styles.endGame__rating)}>
        {status === 'win' && <RatingStars rating={rating} />}
      </div>
      <div className={cx('endGame__actions')}>
        <button
          className={cx('endGame__action', 'shadow')}
          onClick={() => navigate('/game')}
        >
          <ArrowBackIcon />
        </button>
        {status === 'win' && (
          <button
            className={cx('endGame__action', 'next', 'shadow')}
            onClick={goToNextLevel}
          >
            <PlayIcon />
          </button>
        )}
        <button
          className={cx('endGame__action', 'shadow')}
          onClick={restartLevel}
        >
          <RefreshIcon />
        </button>
      </div>
    </div>
  );
}
