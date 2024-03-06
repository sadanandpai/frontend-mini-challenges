export const isSolvable = (grid: number[]) => {
  const size = grid.length;
  let inversionCount = 0;

  for (let i = 0; i < size - 1; i++) {
    for (let j = i + 1; j < size; j++) {
      if (grid[j] && grid[i] && grid[i] > grid[j]) {
        inversionCount += 1;
      }
    }
  }

  return inversionCount % 2 === 0;
};

export const shuffleArrayRandomly = <T>(items: Array<T>) => {
  const n = items.length;
  for (let i = 0; i < n; i++) {
    const idx = Math.floor(Math.random() * (n - i));

    // swap values
    const temp = items[n - i - 1];
    items[n - i - 1] = items[idx];
    items[idx] = temp;
  }

  return items;
};

export const getSolvableArray = (rows: number, cols: number) => {
  let array: number[];
  do {
    array = shuffleArrayRandomly(Array.from({ length: rows * cols - 1 }, (_, i) => i + 1));
  } while (!isSolvable(array));
  return array;
};

export const generateNewGrid = (rows = 4, cols = 4) => {
  const array = getSolvableArray(rows, cols);
  const newGrid = Array.from({ length: rows }, (_, idx) =>
    array.slice(idx * cols, idx * cols + cols)
  );
  newGrid[rows - 1][cols - 1] = 0;

  return newGrid;
};
