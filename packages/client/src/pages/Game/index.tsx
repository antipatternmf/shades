import classNames from 'classnames/bind';
import React from 'react';
import CanvasComponent from '../../core/Canvas';
import CanvasCircle from '../../core/CanvasCircle';

import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function Game() {
  const circle = new CanvasCircle({
    x: 300, y: 300, color: 'red', secondaryColor: 'pink', radius: 25,
  });

  return (
    <div className={cx('container')}>
      <CanvasComponent
        width={window.innerWidth}
        height={window.innerHeight}
        drawables={[circle]}
      />
    </div>
  );
}

export default Game;
