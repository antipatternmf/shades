import classNames from 'classnames/bind';
import styles from '../style.module.pcss';

const cx = classNames.bind(styles);

function SkeletUser() {
  return (
    <div className={cx(styles.leaderboardSkelet, 'shadow')}>
      <div className={cx(styles.leaderboardSkeletPlace)} />
      <div className={cx(styles.leaderboardSkeletAvatar)} />
      <p className={cx(styles.leaderboardSkeletName)} />
      <div className={cx(styles.leaderboardSkeletScore)} />
    </div>
  );
}

export default SkeletUser;
