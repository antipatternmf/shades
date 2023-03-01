import classNames from 'classnames/bind';

import React from 'react';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function Forum() {
  return (
    <div className={cx('container')}>
      Forum
    </div>
  );
}

export default Forum;
