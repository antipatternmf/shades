import classNames from 'classnames/bind';

import React from 'react';
import { useAppSelector } from 'store/hooks';
import { Link } from 'react-router-dom';
import { selectUser } from 'reducers/user';
import Header from 'components/Header';
import styles from './style.module.pcss';
import { Paths } from '../../router';

const cx = classNames.bind(styles);

function Main() {
  const title = 'Shades.';

  const isAuth = useAppSelector(selectUser.isAuth);

  const authButton = (
    <>
      <Link className={cx('default-button')} to={Paths.SignIn}> Авторизоваться </Link>
      <Link className={cx('default-button')} to={Paths.SignUp}> Зарегистрироваться </Link>
    </>
  );

  const mainWindow = (
    <>
      <Link className={cx('default-button', styles.mainButton, styles.mainButtonGame)} to={Paths.Game}> Играть </Link>
      <Link className={cx('default-button', styles.mainButton, styles.mainButtonLeaderboard)} to={Paths.Leaderboard}> Таблица лидеров </Link>
      <Link className={cx('default-button', styles.mainButton, styles.mainButtonForum)} to={Paths.Forum}> Форум </Link>
      <Link className={cx('default-button', styles.mainButton, styles.mainButtonProfile)} to={Paths.Profile}> Профиль </Link>
    </>
  );

  return (
    <div className={cx(styles.main)}>

      <div className={cx(styles.mainContainer)}>
        <Header title={title} isShowBackButton={false} />

        <div className={cx(styles.mainBox)}>

          {isAuth ? mainWindow : authButton}
        </div>

      </div>
    </div>
  );
}

export default Main;
