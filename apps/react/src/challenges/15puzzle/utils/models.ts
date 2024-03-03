export enum AnimationDirection {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

export interface Poz {
  row: number;
  col: number;
}

export interface PrevMoves {
  moves: Poz[];
  capacity: number;
}

export interface Animation {
  element: Poz | null;
  type: AnimationDirection | '';
}

export const possibleMoves: {
  direction: AnimationDirection;
  delta: number[];
}[] = [
  {
    direction: AnimationDirection.Up,
    delta: [-1, 0],
  },
  {
    direction: AnimationDirection.Down,
    delta: [1, 0],
  },
  {
    direction: AnimationDirection.Left,
    delta: [0, -1],
  },
  {
    direction: AnimationDirection.Right,
    delta: [0, 1],
  },
];
