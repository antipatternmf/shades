import classNames from 'classnames/bind';
import { RatingStars } from 'components/RatingStars';
import { Link } from 'react-router-dom';
import { selectLevelScore } from 'reducers/scores';
import { useAppSelector } from 'store/hooks';
import styles from './style.module.pcss';

type LevelTileProps = {
  levelId: number;
};

const cx = classNames.bind(styles);

export function LevelTile({ levelId }: LevelTileProps) {
  const score = useAppSelector(selectLevelScore(levelId));

  return (
    <Link
      className={cx(styles.levels__level, 'shadow')}
      to={`${levelId}`}
    >
      <div className={cx(styles.levels__subtitle)}>{levelId}</div>
      <div className={cx(styles.levels__rating)}>
        <RatingStars rating={score || 0} />
      </div>
    </Link>
  );
}
