import classNames from 'classnames/bind';

import React from 'react';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function Main() {
  return (
    <div className={cx('container')}>
      Main
    </div>
  );
}

export default Main;
