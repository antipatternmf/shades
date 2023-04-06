import BlobTarget from 'pages/Game/lib/config/blobTarget';

export type GameElement = {
  x: number;
  y: number;
  color: string;
  secondaryColor: string;
  radius: number;
  createSvg?: (color: string) => string;
};

export type GameLevel = {
  drawables: GameElement[];
  obstacles: GameElement[];
  targets: GameElement[];
};

const GameLevels: GameLevel[] = [
  {
    drawables: [
      {
        x: 247,
        y: 88,
        color: 'blue',
        secondaryColor: 'dodgerblue',
        radius: 25,
      },
    ],
    obstacles: [],
    targets: [
      {
        x: 450,
        y: 530,
        color: 'blue',
        secondaryColor: 'dodgerblue',
        radius: 50,
        createSvg: BlobTarget,
      },
    ],
  },
  {
    drawables: [
      {
        x: 247,
        y: 88,
        color: 'blue',
        secondaryColor: 'dodgerblue',
        radius: 25,
      },
      {
        x: 400,
        y: 88,
        color: 'blue',
        secondaryColor: 'dodgerblue',
        radius: 25,
      },
    ],
    targets: [
      {
        x: 250,
        y: 530,
        color: 'darkgreen',
        secondaryColor: 'darkgreen',
        radius: 50,
        createSvg: BlobTarget,
      },
      {
        x: 450,
        y: 530,
        color: 'blue',
        secondaryColor: 'dodgerblue',
        radius: 50,
        createSvg: BlobTarget,
      },
    ],
    obstacles: [
      {
        x: 450,
        y: 300,
        color: 'yellow',
        secondaryColor: 'yellow',
        radius: 50,
        createSvg: BlobTarget,
      },
    ],
  },
];

export default GameLevels;
