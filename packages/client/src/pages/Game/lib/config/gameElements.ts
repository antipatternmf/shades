import BlobTarget from 'pages/Game/lib/config/blobTarget';

export type GameElement = {
  x: number;
  y: number;
  color: string;
  secondaryColor: string;
  radius: number;
  createSvg?: (color: string) => string;
};

export const drawablesConfig: GameElement[] = [
  {
    x: 300,
    y: 300,
    color: 'blue',
    secondaryColor: 'dodgerblue',
    radius: 25,
  },
  {
    x: 400,
    y: 300,
    color: 'blue',
    secondaryColor: 'dodgerblue',
    radius: 25,
  },
];

export const targetsConfig: GameElement[] = [
  {
    x: 250,
    y: 700,
    color: 'darkgreen',
    secondaryColor: 'darkgreen',
    radius: 50,
    createSvg: BlobTarget,
  },
  {
    x: 450,
    y: 700,
    color: 'blue',
    secondaryColor: 'dodgerblue',
    radius: 50,
    createSvg: BlobTarget,
  },
];

export const obstaclesConfig: GameElement[] = [
  {
    x: 700,
    y: 300,
    color: 'yellow',
    secondaryColor: 'yellow',
    radius: 50,
    createSvg: BlobTarget,
  },
];
