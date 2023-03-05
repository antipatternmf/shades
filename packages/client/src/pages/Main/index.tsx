import classNames from 'classnames/bind';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectUser, userGet, userLogout } from 'reducers/user';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

const withoutRequest = ['/', '/sign-up', '/sign-in'];

function Main() {
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const isAuth = useAppSelector(selectUser.isAuth);
  const userInfo = useAppSelector(selectUser.info);

  useEffect(() => {
    if (!userInfo && !withoutRequest.includes(location.state?.from.pathname)) {
      dispatch(userGet());
    }
  }, [userInfo, dispatch, location.state]);

  const onClickHandle = () => {
    if (!userInfo) {
      navigate('/sign-in', { state: { from: location } });
    } else {
      navigate('/game');
    }
  };

  return (
    <div className={cx('container')}>
      Main
      <button type="button" onClick={onClickHandle}>{isAuth ? 'Play' : 'Sign in'}</button>
      {isAuth && (<button type="button" onClick={() => dispatch(userLogout())}>logout</button>)}
    </div>
  );
}

export default Main;
