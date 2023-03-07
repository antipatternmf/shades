export default function getMouseCoordinates(canvas: HTMLCanvasElement, event: MouseEvent) {
  const canvasCoords = canvas.getBoundingClientRect();
  return {
    x: event.pageX - canvasCoords.left,
    y: event.pageY - canvasCoords.top,
  };
}
