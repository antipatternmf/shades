import classNames from 'classnames/bind';

import React from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useNavigate } from 'react-router-dom';
import { selectUser, userLogout } from 'reducers/user';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function Main() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectUser.isAuth);

  const onClickHandle = () => {
    let path = '/sign-in';
    if (isAuth) {
      path = '/game';
    }
    navigate(path);
  };

  const onClickLogout = () => {
    dispatch(userLogout());
  };

  return (
    <div className={cx('container')}>
      Main
      <button
        type="button"
        onClick={onClickHandle}
      >
        {isAuth ? 'Play' : 'Sign in'}
      </button>
      {isAuth && (
        <button
          type="button"
          onClick={onClickLogout}
        >
          logout
        </button>
      )}
    </div>
  );
}

export default Main;
