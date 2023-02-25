import classNames from 'classnames/bind';

import React from 'react';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function SignIn() {
  return (
    <div className={cx('container')}>
      SignIn
    </div>
  );
}

export default SignIn;
