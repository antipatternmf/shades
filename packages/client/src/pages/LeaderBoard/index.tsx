import classNames from 'classnames/bind';

import React from 'react';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function LeaderBoard() {
  return <div className={cx('container')}>LeaderBoard</div>;
}

export default LeaderBoard;
