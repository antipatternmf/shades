import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import GameIcon from 'components/icons/GameIcon';
import ProfileIcon from 'components/icons/ProfileIcon';
import LeaderBoardIcon from 'components/icons/LeaderBoardIcon';
import ForumIcon from 'components/icons/ForumIcon';
import { Paths } from '../../../router';
import styles from '../style.module.pcss';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx(styles.home)}>
      <Link
        className={cx(styles.home__link, 'shadow')}
        to={Paths.Levels}
      >
        <div className={cx(styles.home__icon)}>
          <GameIcon />
        </div>
        <span>Играть</span>
      </Link>
      <Link
        className={cx(styles.home__link, 'shadow')}
        to={Paths.Profile}
      >
        <div className={cx(styles.home__icon)}>
          <ProfileIcon />
        </div>
        <span>Профиль</span>
      </Link>
      <Link
        className={cx(styles.home__link, 'shadow')}
        to={Paths.Leaderboard}
      >
        <div className={cx(styles.home__icon)}>
          <LeaderBoardIcon />
        </div>
        <span>
          Доска
          <br />
          лидеров
        </span>
      </Link>
      <Link
        className={cx(styles.home__link, 'shadow')}
        to={Paths.Forum}
      >
        <div className={cx(styles.home__icon)}>
          <ForumIcon />
        </div>
        <span>Форум</span>
      </Link>
    </div>
  );
}

export default Home;
