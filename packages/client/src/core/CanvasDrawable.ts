export type CanvasDrawableProps = {
  x: number;
  y: number;
  color: string;
  secondaryColor: string;
};

export default class CanvasDrawable {
  active: boolean;

  offsetX: number;

  offsetY: number;

  x: number;

  y: number;

  color: string;

  secondaryColor: string;

  constructor(props: CanvasDrawableProps) {
    this.active = false;
    this.offsetX = 0;
    this.offsetY = 0;
    this.x = props.x;
    this.y = props.y;
    this.color = props.color;
    this.secondaryColor = props.secondaryColor;
  }

  activate() {
    this.active = true;
  }

  disable() {
    this.active = false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  draw(context: CanvasRenderingContext2D | null | undefined) {
    throw new Error('Must be implemented');
  }

  setOffset(x: number, y: number) {
    this.offsetX = x;
    this.offsetY = y;
  }

  setCoords(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  pointInDrawable(x: number, y: number): boolean {
    throw new Error('Must be implemented');
  }
}
