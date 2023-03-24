import classNames from 'classnames/bind';

import React from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '../../../router';
import styles from '../style.module.pcss';

const cx = classNames.bind(styles);

function Welcome() {
  const description = `Shades - это игра-головоломка, в которой игрокам необходимо соединять точки разными цветами, чтобы заполнить поле цветными линиями. 
  Цель игры - заполнить все поле, используя минимальное количество ходов.`;

  return (
    <>
      <p className={cx(styles.mainDescription)}>{description}</p>

      <Link
        className={cx('default-button')}
        to={Paths.SignIn}
      >
        Авторизоваться
      </Link>
      <Link
        className={cx('default-button')}
        to={Paths.SignUp}
      >
        Зарегистрироваться
      </Link>
    </>
  );
}

export default Welcome;
