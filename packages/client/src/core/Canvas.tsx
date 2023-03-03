import { useEffect, useRef, useState } from 'react';
import CanvasDrawable from './CanvasDrawable';

export type CanvasProps = {
  width: number | string;
  height: number | string;
  draggable?: boolean;
  drawables: CanvasDrawable[];
};

function getMouseCoordinates(canvas: HTMLCanvasElement, event: MouseEvent) {
  const canvasCoords = canvas.getBoundingClientRect();
  return {
    x: event.pageX - canvasCoords.left,
    y: event.pageY - canvasCoords.top,
  };
}

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
    const { drawables } = props;

    drawables.forEach((drawable) => {
      if (ctx instanceof CanvasRenderingContext2D && ref.current) {
        drawable.draw(ctx);
        // TODO: accept mouse callbacks as props
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
    <div>
      <canvas id="canvas" ref={ref} width={width} height={height} />
    </div>
  );
}
