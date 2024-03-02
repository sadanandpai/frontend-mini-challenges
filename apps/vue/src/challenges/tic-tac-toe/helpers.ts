export function hasSameItems(items: (string | null)[], value: string | null) {
  return items.every((item) => item === value);
}

function getWinningPositions(
  grid: (string | null)[][],
  isWinner: boolean,
  {
    row,
    col,
    diagonal,
    reverseDiagonal,
  }: {
    row: number | false;
    col: number | false;
    diagonal: boolean;
    reverseDiagonal: boolean;
  }
) {
  if (!isWinner) {
    return new Set<number>();
  }

  const winningPositions = new Set<number>();
  if (row !== false) {
    grid.forEach((_, i) => {
      winningPositions.add(row * grid.length + i);
    });
  }

  if (col !== false) {
    grid.forEach((_, i) => {
      winningPositions.add(i * grid.length + col);
    });
  }

  if (diagonal) {
    grid
      .map((row, idx) => row[idx])
      .forEach((_, i) => {
        winningPositions.add(i * grid.length + i);
      });
  }

  if (reverseDiagonal) {
    grid
      .map((row, idx) => row[grid.length - 1 - idx])
      .forEach((_, i) => {
        winningPositions.add(i * grid.length + grid.length - 1 - i);
      });
  }

  return winningPositions;
}

export function getGameStatus(grid: (string | null)[][], pos: { row: number; col: number }) {
  const value = grid[pos.row][pos.col];

  const rowMatch = hasSameItems(grid[pos.row], value);
  const colMatch = hasSameItems(
    grid.map((row) => row[pos.col]),
    value
  );

  const diagonalMatch =
    pos.row === pos.col &&
    hasSameItems(
      grid.map((row, idx) => row[idx]),
      value
    );

  const reverseDiagonalMatch =
    pos.row + pos.col === grid.length - 1 &&
    hasSameItems(
      grid.map((row, idx) => row[grid.length - 1 - idx]),
      value
    );

  const isWinner = rowMatch || colMatch || diagonalMatch || reverseDiagonalMatch;

  const winningPositions = getWinningPositions(grid, isWinner, {
    row: rowMatch && pos.row,
    col: colMatch && pos.col,
    diagonal: diagonalMatch,
    reverseDiagonal: reverseDiagonalMatch,
  });

  return {
    winner: isWinner && value,
    winningPositions,
  };
}
