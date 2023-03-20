import { CanvasDrawableProps } from './CanvasDrawable';
import CanvasCircle from './CanvasCircle';

export type CanvasTargetProps = {
  radius: number;
} & CanvasDrawableProps;

export class CanvasTargetCircle extends CanvasCircle {
  radius: number;

  private isDone: boolean;

  constructor(props: CanvasTargetProps) {
    super(props);
    this.radius = props.radius;
    this.isDone = false;
  }

  setIsDone() {
    this.isDone = true;
  }

  getIsDone() {
    return this.isDone;
  }
}
