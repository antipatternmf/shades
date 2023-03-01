import classNames from 'classnames/bind';

import React from 'react';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function Game() {
  return (
    <div className={cx('container')}>
      Game
    </div>
  );
}

export default Game;
