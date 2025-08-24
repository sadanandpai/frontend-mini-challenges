export enum CellValue {
  black = 'black',
  white = 'white',
  empty = 'empty',
}
export type BoardType = CellValue[][];

export const BOARD_SIZE = 8;
export const DIRECTIONS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];
