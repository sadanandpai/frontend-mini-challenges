const gridSize = 8;
const board = document.querySelector('.board');

function createBoard(element, rows, cols = rows) {
  var gridDocFragment = document.createDocumentFragment();
  for (let i = 0; i < rows; i++) {
    var row = document.createElement('div');
    for (let j = 0; j < cols; j++) {
      var col = document.createElement('button');
      col.dataset.x = i;
      col.dataset.y = j;
      col.classList.add('box');
      row.appendChild(col);
    }
    gridDocFragment.appendChild(row);
  }
  element.appendChild(gridDocFragment);
}

function onClick(event) {
  resetChessGrid();

  const element = event.target;
  if (element.classList.contains('box')) {
    setColor(element);
    let x = +element.dataset.x;
    let y = +element.dataset.y;

    for (let i = x - 1, offset = 1, col = y; i >= 0; i--, offset++) {
      setColor(board.querySelector(`[data-x='${i}'][data-y='${col - offset}']`));
      setColor(board.querySelector(`[data-x='${i}'][data-y='${col + offset}']`));
    }

    for (let i = x + 1, offset = 1, col = y; i < gridSize; i++, offset++) {
      setColor(board.querySelector(`[data-x='${i}'][data-y='${col - offset}']`));
      setColor(board.querySelector(`[data-x='${i}'][data-y='${col + offset}']`));
    }
  }
}

function setColor(element) {
  if (element) element.classList.add('selected');
}

function resetChessGrid() {
  const elements = document.querySelector('.board').getElementsByClassName('selected');
  while (elements.length !== 0) elements[0].classList.remove('selected');
}

createBoard(board, gridSize);
document.addEventListener('click', onClick);
