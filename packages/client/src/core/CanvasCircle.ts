import CanvasDrawable, { CanvasDrawableProps } from './CanvasDrawable';
import isPointInCircle from '../utils/isPointInCircle';

export type CircleProps = {
  radius: number;
} & CanvasDrawableProps;

export default class CanvasCircle extends CanvasDrawable {
  radius: number;

  constructor(props: CircleProps) {
    super(props);
    this.radius = props.radius;
  }

  draw(context: CanvasRenderingContext2D | null | undefined) {
    if (context) {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      context.fillStyle = this.active ? 'pink' : 'red';
      context.fill();
    }
  }

  pointInDrawable(x: number, y: number) {
    return isPointInCircle(this.x, this.y, x, y, this.radius);
  }
}
