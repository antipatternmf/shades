import classNames from 'classnames/bind';

import React, { useEffect, useState } from 'react';
import { GameElement } from 'pages/Game/lib/config/gameElements';

import styles from './style.module.pcss';
import CanvasPaintableCircle from '../../../../core/CanvasPaintableCircle';
import CanvasCircle from '../../../../core/CanvasCircle';
import CanvasObstacles from '../../../../core/CanvasObstacles';
import CanvasComponent from '../../../../core/Canvas';
import { CanvasTargetCircle } from '../../../../core/CanvasTargetCircle';

const cx = classNames.bind(styles);

type GameCanvasProps = {
  drawablesConfig: GameElement[];
  targetsConfig: GameElement[];
  obstaclesConfig: GameElement[];
};

function GameCanvas({ drawablesConfig, obstaclesConfig, targetsConfig }: GameCanvasProps) {
  const drawables = drawablesConfig.map((props) => new CanvasPaintableCircle(props));
  const obstacles = obstaclesConfig.map((props) => new CanvasCircle(props));
  const targets = targetsConfig.map((props) => new CanvasTargetCircle(props));

  const [ctxObstacle, setCtxObstacle] = useState<CanvasRenderingContext2D>();
  const [ctxTarget, setCtxTarget] = useState<CanvasRenderingContext2D>();

  useEffect(() => {
    const obstaclesCanvas = document.getElementById('obstacles') as HTMLCanvasElement;
    const targetCanvas = document.getElementById('targets') as HTMLCanvasElement;

    const obstacleContext = obstaclesCanvas?.getContext('2d');
    const targetContext = targetCanvas?.getContext('2d');

    if (obstacleContext && targetContext) {
      setCtxObstacle(obstacleContext);
      setCtxTarget(targetContext);
    }
  }, []);

  return (
    <div className={cx('container')}>
      <CanvasObstacles
        id="obstacles"
        width={window.innerWidth}
        height={window.innerHeight}
        drawables={targets}
      />

      <CanvasObstacles
        id="targets"
        width={window.innerWidth}
        height={window.innerHeight}
        drawables={obstacles}
      />

      <CanvasComponent
        width={window.innerWidth}
        height={window.innerHeight}
        drawables={drawables}
        obstacleContext={ctxObstacle}
        obstacles={obstacles}
        targetContext={ctxTarget}
        targets={targets}
      />
    </div>
  );
}

export default GameCanvas;
