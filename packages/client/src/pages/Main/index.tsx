import classNames from 'classnames/bind';
import { useAppSelector } from 'store/hooks';
import { selectUser } from 'reducers/user';
import TopBar from 'components/TopBar';
import ToggleTheme from 'components/ToggleTheme';
import Home from './Home';
import Welcome from './Welcome';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function Main() {
  const title = 'Shades.';

  const isAuth = useAppSelector(selectUser.isAuth);

  return (
    <main className={cx('wrapper')}>
      {isAuth && <ToggleTheme />}
      <div className={cx('container', 'shadow')}>
        <TopBar
          title={title}
          isShowBackBtn={false}
        />
        {isAuth ? <Home /> : <Welcome />}
      </div>
    </main>
  );
}

export default Main;
