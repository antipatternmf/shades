export default function isPointInCircle(
  xc: number,
  yc: number,
  xp: number,
  yp: number,
  radius: number,
): boolean {
  const distance = Math.sqrt((xc - xp) ** 2 + (yc - yp) ** 2);
  return distance <= radius;
}
