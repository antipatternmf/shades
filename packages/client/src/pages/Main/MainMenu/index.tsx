import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Paths } from '../../../router';
import styles from '../style.module.pcss';

const cx = classNames.bind(styles);

function MainMenu() {
  return (
    <>
      <Link
        className={cx(
          'default-button',
          styles.mainButton,
          styles.mainButtonGame,
        )}
        to={Paths.Game}
      >
        Играть
      </Link>
      <Link
        className={cx(
          'default-button',
          styles.mainButton,
          styles.mainButtonLeaderboard,
        )}
        to={Paths.Leaderboard}
      >
        Таблица лидеров
      </Link>
      <Link
        className={cx(
          'default-button',
          styles.mainButton,
          styles.mainButtonForum,
        )}
        to={Paths.Forum}
      >
        Форум
      </Link>
      <Link
        className={cx(
          'default-button',
          styles.mainButton,
          styles.mainButtonProfile,
        )}
        to={Paths.Profile}
      >
        Профиль
      </Link>
    </>
  );
}

export default MainMenu;
