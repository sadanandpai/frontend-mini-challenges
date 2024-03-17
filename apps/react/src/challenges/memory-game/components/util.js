export function getEmptyGrid(rows, cols) {
  const grid = [];
  for (let i = 0; i < rows; i++) {
    grid.push([]);
    for (let j = 0; j < cols; j++) {
      grid[i].push(0);
    }
  }
  return grid;
}

export function getMemoryGrid(rows, cols) {
  const totalCells = rows * cols;
  const grid = getEmptyGrid(rows, cols);
  const maxActiveCount = Math.ceil(Math.sqrt(totalCells)) + 1;
  let activeCount = 0;

  let position = 0;
  while (activeCount < maxActiveCount) {
    position = (position + Math.ceil(Math.random() * totalCells)) % totalCells;
    const rowIndex = Math.floor(position / cols);
    const colIndex = Math.floor(position % cols);
    if (grid[rowIndex][colIndex] === 0) {
      grid[rowIndex][colIndex] = 1;
      activeCount = activeCount + 1;
    }
  }
  return { grid, activeCount };
}
