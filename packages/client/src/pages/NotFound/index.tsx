import classNames from 'classnames/bind';

import React from 'react';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function NotFound() {
  return <div className={cx('container')}>NotFound</div>;
}

export default NotFound;
