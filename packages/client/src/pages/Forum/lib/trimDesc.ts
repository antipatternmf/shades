export const trimDesc = (str: string): string => {
  if (str.length > 50) {
    str = str.substring(0, 50);
    str += '...';

    return str;
  }

  return str;
};
