import CanvasDrawable, { CanvasDrawableProps } from './CanvasDrawable';

export type CanvasRectangleProps = {
  x1: number;
  y1: number;
  width: number;
} & CanvasDrawableProps;

export default class CanvasLine extends CanvasDrawable {
  x1: number;

  y1: number;

  width: number;

  constructor(props: CanvasRectangleProps) {
    super(props);
    this.x1 = props.x1;
    this.y1 = props.y1;
    this.width = props.width;
  }

  draw(context: CanvasRenderingContext2D | null | undefined) {
    if (context) {
      context.lineWidth = this.width;
      context.beginPath();
      context.strokeStyle = this.color;
      context.moveTo(this.x, this.y);
      context.lineTo(this.x1, this.y1);
      context.stroke();
    }
  }
}
