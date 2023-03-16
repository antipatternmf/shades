import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import CanvasComponent from '../../core/Canvas';
import CanvasObstacles from '../../core/CanvasObstacles';
import CanvasPaintableCircle from '../../core/CanvasPaintableCircle';
import CanvasCircle from '../../core/CanvasCircle';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

function Game() {
  const circle = new CanvasPaintableCircle({
    x: 300,
    y: 300,
    color: 'blue',
    secondaryColor: 'dodgerblue',
    radius: 25,
  });
  const circle0 = new CanvasPaintableCircle({
    x: 400,
    y: 300,
    color: 'blue',
    secondaryColor: 'dodgerblue',
    radius: 25,
  });
  const circle2 = new CanvasCircle({
    x: 700,
    y: 300,
    color: 'yellow',
    secondaryColor: 'yellow',
    radius: 50,
  });
  const circle3 = new CanvasCircle({
    x: 350,
    y: 700,
    color: 'darkgreen',
    secondaryColor: 'darkgreen',
    radius: 50,
  });
  const circle4 = new CanvasCircle({
    x: 450,
    y: 700,
    color: 'blue',
    secondaryColor: 'dodgerblue',
    radius: 50,
  });

  const [ctxObstacle, setCtxObstacle] = useState<CanvasRenderingContext2D>();
  const [ctxTarget, setCtxTarget] = useState<CanvasRenderingContext2D>();

  useEffect(() => {
    return () => {
      const obstacleContext = (
        document.getElementById('obstacles') as HTMLCanvasElement
      ).getContext('2d');
      const targetContext = (
        document.getElementById('targets') as HTMLCanvasElement
      ).getContext('2d');
      if (obstacleContext && targetContext) {
        setCtxObstacle(obstacleContext);
        setCtxTarget(targetContext);
      }
    };
  }, []);

  return (
    <div className={cx('container')}>
      <CanvasObstacles
        id="obstacles"
        width={window.innerWidth}
        height={window.innerHeight}
        drawables={[circle2]}
      />
      <CanvasObstacles
        id="targets"
        width={window.innerWidth}
        height={window.innerHeight}
        drawables={[circle3, circle4]}
      />
      <CanvasComponent
        width={window.innerWidth}
        height={window.innerHeight}
        drawables={[circle0, circle]}
        obstacleContext={ctxObstacle}
        obstacles={[circle2]}
        targetContext={ctxTarget}
        targets={[circle3, circle4]}
      />
    </div>
  );
}

export default Game;
