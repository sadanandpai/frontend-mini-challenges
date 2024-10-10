export function createBoard(rows: number, cols = rows) {
  const gridDocFragment = document.createDocumentFragment();

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    for (let j = 0; j < cols; j++) {
      const col = document.createElement('button');
      col.dataset.x = String(i);
      col.dataset.y = String(j);
      col.classList.add('box');
      row.appendChild(col);
    }
    gridDocFragment.appendChild(row);
  }

  return gridDocFragment;
}

export function setColor(element: HTMLElement | null) {
  if (element) {
    element.classList.add('selected');
  }
}

export function getCell(board: HTMLDivElement, x: number, y: number): HTMLElement | null {
  return board.querySelector(`[data-x='${x}'][data-y='${y}']`);
}

export function markBishopMoves(board: HTMLDivElement, x: number, y: number, size: number) {
  const cell = getCell(board, x, y);
  setColor(cell);

  for (let i = x - 1, offset = 1, col = y; i >= 0; i--, offset++) {
    setColor(board.querySelector(`[data-x='${i}'][data-y='${col - offset}']`));
    setColor(board.querySelector(`[data-x='${i}'][data-y='${col + offset}']`));
  }

  for (let i = x + 1, offset = 1, col = y; i < size; i++, offset++) {
    setColor(board.querySelector(`[data-x='${i}'][data-y='${col - offset}']`));
    setColor(board.querySelector(`[data-x='${i}'][data-y='${col + offset}']`));
  }
}
