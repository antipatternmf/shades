import CanvasDrawable, { CanvasDrawableProps } from './CanvasDrawable';
import isPointInCircle from '../utils/isPointInCircle';

export type CircleProps = {
  radius: number;
  createSvg?: (color: string) => string;
} & CanvasDrawableProps;

export default class CanvasCircle extends CanvasDrawable {
  radius: number;

  createSvg?: (color: string) => string;

  constructor(props: CircleProps) {
    super(props);
    this.radius = props.radius;
    this.createSvg = props.createSvg;
  }

  draw(context: CanvasRenderingContext2D | null | undefined) {
    if (this.createSvg && context) {
      this.drawImage(context, this.createSvg);
    } else if (context) {
      this.drawCircle(context);
    }
  }

  drawImage(
    context: CanvasRenderingContext2D,
    createSvg: (color: string) => string,
  ) {
    this.path = new Path2D();
    this.path.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    const image = new Image();
    image.onload = () => {
      context.drawImage(
        image,
        this.x - (this.radius * 3) / 2,
        this.y - (this.radius * 3) / 2,
        this.radius * 3,
        this.radius * 3,
      );
    };
    image.src = `data:image/svg+xml;base64,${window.btoa(
      createSvg(this.color),
    )}`;
    this.path.closePath();
  }

  drawCircle(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.fillStyle = this.color;
    this.path.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.fill(this.path);
    context.closePath();
  }

  pointInDrawable(x: number, y: number) {
    return isPointInCircle(this.x, this.y, x, y, this.radius);
  }
}
