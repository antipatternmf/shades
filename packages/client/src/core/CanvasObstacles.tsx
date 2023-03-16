import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import CanvasDrawable from './CanvasDrawable';
import styles from './style.module.pcss';

const cx = classNames.bind(styles);

export type CanvasObstaclesProps = {
  width: number | string;
  height: number | string;
  id: string;
  drawables: CanvasDrawable[];
};

export default function CanvasObstacles(props: CanvasObstaclesProps) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
  const { width, height, id } = props;

  useEffect(() => {
    const context = ref.current?.getContext('2d');
    if (context) {
      setCtx(context);
    }
    const { drawables } = props;

    drawables.forEach((drawable) => {
      if (ctx instanceof CanvasRenderingContext2D && ref.current) {
        drawable.draw(ctx);
      }
    });
  }, [props, ctx, ref]);

  return (
    <canvas
      id={id}
      className={cx('canvas-obstacles')}
      ref={ref}
      width={width}
      height={height}
    />
  );
}
