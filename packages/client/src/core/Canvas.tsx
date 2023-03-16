import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import getMouseCoordinates from 'utils/getMouseCoordinates';
import CanvasDrawable from './CanvasDrawable';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

export type CanvasProps = {
  width: number | string;
  height: number | string;
  drawables: CanvasDrawable[];
  obstacleContext?: CanvasRenderingContext2D;
  obstacles: CanvasDrawable[];
  targetContext?: CanvasRenderingContext2D;
  targets: CanvasDrawable[];
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
  const ref = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
  const { width, height } = props;

  useEffect(() => {
    const context = ref.current?.getContext('2d');
    if (context) {
      setCtx(context);
    }
    const { drawables, obstacleContext, obstacles, targetContext, targets } =
      props;

    drawables.forEach((drawable) => {
      if (ctx instanceof CanvasRenderingContext2D && ref.current) {
        drawable.draw(ctx);
        ref.current?.addEventListener('mousedown', (e) => {
          const mouse = getMouseCoordinates(ctx.canvas, e);
          if (drawable.pointInDrawable(mouse.x, mouse.y)) {
            drawable.activate();
            drawable.setOffset(mouse.x, mouse.y);
          }
        });
        ref.current?.addEventListener('mouseup', () => {
          drawable.disable();
        });

        ref.current?.addEventListener('mousemove', (e) => {
          const mouse = getMouseCoordinates(ctx.canvas, e);
          if (drawable.active) {
            if (
              obstacles.some((it) =>
                obstacleContext?.isPointInPath(it.path, mouse.x, mouse.y))
            ) {
              drawable.setColor('green', 'yellowgreen');
            }
            if (
              targets.some((it) =>
                targetContext?.isPointInPath(it.path, mouse.x, mouse.y))
            ) {
              console.log('game over');
            }
            const newX = e.offsetX;
            const newY = e.offsetY;
            ctx.beginPath();
            ctx.strokeStyle = drawable.secondaryColor;
            ctx.lineWidth = 50;
            ctx.moveTo(drawable.x, drawable.y);
            ctx.lineTo(newX, newY);
            ctx.stroke();
            drawable.setCoords(mouse.x, mouse.y);
          }
        });
        animate(ref.current, drawables);
      }
    });
  }, [props, ctx]);

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
