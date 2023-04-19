import classNames from 'classnames/bind';
import styles from '../style.module.pcss';

const cx = classNames.bind(styles);

function SkeletUser() {
  return (
    <div className={cx(styles.leaderboard__skelet, 'shadow')}>
      <div className={cx(styles.leaderboard__skeletPlace)} />
      <div className={cx(styles.leaderboard__skeletAvatar)} />
      <p className={cx(styles.leaderboard__skeletName)} />
      <div className={cx(styles.leaderboard__skeletScore)} />
    </div>
  );
}

export default SkeletUser;
