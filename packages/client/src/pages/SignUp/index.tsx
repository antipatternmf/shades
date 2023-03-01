import classNames from 'classnames/bind';

import React from 'react';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function SignUp() {
  return (
    <div className={cx('container')}>
      SignUp
    </div>
  );
}

export default SignUp;
