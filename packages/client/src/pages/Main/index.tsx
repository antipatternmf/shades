import classNames from 'classnames/bind';

import React from 'react';
import { useAppSelector } from 'store/hooks';
import { selectUser } from 'reducers/user';
import Header from 'components/Header';
import MainMenu from './MainMenu';
import Welcome from './Welcome';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function Main() {
  const title = 'Shades.';

  const isAuth = useAppSelector(selectUser.isAuth);

  return (
    <div className={cx(styles.main)}>
      <div className={cx(styles.mainContainer)}>
        <Header
          title={title}
          isShowBackButton={false}
        />

        <div className={cx(styles.mainBox)}>
          {isAuth ? <MainMenu /> : <Welcome />}
        </div>
      </div>
    </div>
  );
}

export default Main;
