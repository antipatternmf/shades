import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import getMouseCoordinates from 'utils/getMouseCoordinates';
import { useAppDispatch } from 'store/hooks';
import { setGameStatus } from 'reducers/game';
import CanvasDrawable from './CanvasDrawable';
import styles from './style.module.pcss';
import { CanvasTargetCircle } from './CanvasTargetCircle';

const cx = classNames.bind(styles);

export type CanvasProps = {
  width: number | string;
  height: number | string;
  drawables: CanvasDrawable[];
  obstacleContext?: CanvasRenderingContext2D;
  obstacles: CanvasDrawable[];
  targetContext?: CanvasRenderingContext2D;
  targets: CanvasTargetCircle[];
};

function animate(canvas: HTMLCanvasElement, drawables: CanvasDrawable[]) {
  const ctx = canvas.getContext('2d');
  if (ctx) {
    drawables.forEach((drawable) => {
      drawable.draw(ctx);
    });
    window.requestAnimationFrame(() => animate(canvas, drawables));
  }
}

export default function CanvasComponent(props: CanvasProps) {
  const { width, height, targets, drawables, obstacleContext, obstacles, targetContext } = props;

  const dispatch = useAppDispatch();

  const ref = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();

  useEffect(() => {
    const context = ref.current?.getContext('2d');
    if (context) {
      setCtx(context);
    }

    drawables.forEach((drawable) => {
      if (ctx instanceof CanvasRenderingContext2D && ref.current) {
        drawable.draw(ctx);
        const mousedownListener = (e: MouseEvent) => {
          const mouse = getMouseCoordinates(ctx.canvas, e);
          if (drawable.pointInDrawable(mouse.x, mouse.y)) {
            drawable.activate();
            drawable.setOffset(mouse.x, mouse.y);
          }
        };
        const mouseupListener = () => {
          drawable.disable();
        };
        const mousemoveListener = (e: MouseEvent) => {
          const mouse = getMouseCoordinates(ctx.canvas, e);
          if (drawable.active) {
            if (obstacles.some((it) => obstacleContext?.isPointInPath(it.path, mouse.x, mouse.y))) {
              drawable.setColor('darkgreen', 'yellowgreen');
            }
            if (targets.some((it) => targetContext?.isPointInPath(it.path, mouse.x, mouse.y))) {
              const target = targets.find((it) =>
                targetContext?.isPointInPath(it.path, mouse.x, mouse.y),
              );

              if (targets.every((it) => it.getIsDone())) {
                ref.current?.removeEventListener('mousedown', mousedownListener);
                ref.current?.removeEventListener('mouseup', mouseupListener);
                ref.current?.removeEventListener('mousemove', mousemoveListener);
                setTimeout(() => dispatch(setGameStatus('win')), 3000);
              }

              if (target?.color === drawable.color) {
                target.setIsDone();
              } else {
                dispatch(setGameStatus('lose'));
              }
            }
            const newX = e.offsetX;
            const newY = e.offsetY;
            ctx.beginPath();
            ctx.strokeStyle = drawable.secondaryColor;
            ctx.lineWidth = 50;
            ctx.globalAlpha = 0.03;
            ctx.moveTo(drawable.x, drawable.y);
            ctx.lineTo(newX, newY);
            ctx.stroke();
            drawable.setCoords(mouse.x, mouse.y);
          }
        };

        ref.current?.addEventListener('mousedown', mousedownListener);
        ref.current?.addEventListener('mouseup', mouseupListener);

        ref.current?.addEventListener('mousemove', mousemoveListener);
        animate(ref.current, drawables);
      }
    });
  }, [props, ctx, dispatch, drawables, obstacles, targets, obstacleContext, targetContext]);

  return (
    <canvas
      id="canvas"
      className={cx('canvas-obstacles')}
      ref={ref}
      width={width}
      height={height}
    />
  );
}
