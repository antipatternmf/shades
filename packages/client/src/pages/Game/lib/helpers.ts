export function rateLevelCompletion(startTimeMilliseconds: number, finishTimeMilliseconds: number) {
  const millisecondsInMinute = 1000 * 60;
  const difference = finishTimeMilliseconds - startTimeMilliseconds;

  if (difference < millisecondsInMinute) {
    return 3;
  }

  if (difference < 5 * millisecondsInMinute) {
    return 2;
  }

  return 1;
}
