import { BOARD_SIZE, BoardType, CellValue, DIRECTIONS } from './constants';

export function createInitialBoard(): BoardType {
  const board = Array(BOARD_SIZE)
    .fill(null)
    .map(() => Array(BOARD_SIZE).fill(null));
  board[3][3] = CellValue.white;
  board[3][4] = CellValue.black;
  board[4][3] = CellValue.black;
  board[4][4] = CellValue.white;
  return board;
}

export function isValidMove(
  board: BoardType,
  row: number,
  col: number,
  currentPlayer: CellValue
): boolean {
  if (board[row][col] !== null) return false;

  const opponent = currentPlayer === CellValue.black ? CellValue.white : CellValue.black;
  let isValid = false;

  for (const [dx, dy] of DIRECTIONS) {
    let x = row + dx;
    let y = col + dy;
    let foundOpponent = false;

    while (x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE) {
      if (board[x][y] === null) break;
      if (board[x][y] === opponent) {
        foundOpponent = true;
      } else if (board[x][y] === currentPlayer) {
        if (foundOpponent) {
          isValid = true;
          break;
        }
        break;
      } else {
        break;
      }
      x += dx;
      y += dy;
    }
    if (isValid) break;
  }

  return isValid;
}

export function makeMove(
  board: BoardType,
  row: number,
  col: number,
  currentPlayer: CellValue
): BoardType {
  if (!isValidMove(board, row, col, currentPlayer)) return board;

  const newBoard = board.map((row) => [...row]);
  newBoard[row][col] = currentPlayer;
  const opponent = currentPlayer === CellValue.black ? CellValue.white : CellValue.black;

  for (const [dx, dy] of DIRECTIONS) {
    let x = row + dx;
    let y = col + dy;
    const toFlip: [number, number][] = [];

    while (x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE) {
      if (newBoard[x][y] === null) break;
      if (newBoard[x][y] === opponent) {
        toFlip.push([x, y]);
      } else if (newBoard[x][y] === currentPlayer) {
        for (const [fx, fy] of toFlip) {
          newBoard[fx][fy] = currentPlayer;
        }
        break;
      } else {
        break;
      }
      x += dx;
      y += dy;
    }
  }

  return newBoard;
}

export function hasValidMoves(board: BoardType, player: CellValue): boolean {
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (isValidMove(board, i, j, player)) {
        return true;
      }
    }
  }
  return false;
}

export function countPieces(board: BoardType): { black: number; white: number } {
  let black = 0;
  let white = 0;

  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      if (board[i][j] === CellValue.black) black++;
      else if (board[i][j] === CellValue.white) white++;
    }
  }

  return { black, white };
}
