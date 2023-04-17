import classNames from 'classnames/bind';
import styles from '../style.module.pcss';

type UserProps = {
  place?: number;
  name: string;
  score: number;
};

const cx = classNames.bind(styles);

function User({ place, name, score }: UserProps) {
  return (
    <div className={cx(styles.leaderboard__user, 'shadow')}>
      <div className={cx(styles.leaderboard__userPlace)}>{place}</div>
      <div className={cx(styles.leaderboard__userAvatar)} />
      <p className={cx(styles.leaderboard__userName)}>{name}</p>
      <div className={cx(styles.leaderboard__userScore)}>{score}</div>
    </div>
  );
}

export default User;
