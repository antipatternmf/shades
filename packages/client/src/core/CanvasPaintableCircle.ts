import CanvasCircle from './CanvasCircle';

export default class CanvasPaintableCircle extends CanvasCircle {
  draw(context: CanvasRenderingContext2D | null | undefined) {
    if (context) {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      context.fillStyle = this.active ? this.secondaryColor : this.color;
      context.fill();
      context.closePath();
    }
  }
}
