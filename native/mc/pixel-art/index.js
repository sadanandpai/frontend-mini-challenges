import { Board } from './board.js';

const rows = Math.floor((window.innerHeight - 200) / 30);
const cols = Math.floor((0.9 * window.innerWidth) / 30);

let isMouseDown = false;
const boardElement = document.getElementById('board');

boardElement.addEventListener('mousedown', function (event) {
  const target = event.target;
  if (target.classList.contains('palette')) {
    board.setColor(target.style.backgroundColor);
  } else if (target.classList.contains('box')) {
    target.style.backgroundColor = board.color;
  }

  isMouseDown = true;
});

boardElement.addEventListener('mouseover', function (event) {
  if (isMouseDown) {
    const target = event.target;
    if (target.classList.contains('box') && !target.classList.contains('palette')) {
      target.style.backgroundColor = board.color;
    }
  }
});

boardElement.addEventListener('mouseup', function (event) {
  isMouseDown = false;
});

function setGridCSS(rows, cols) {
  boardElement.style.gridTemplateRows = `repeat(${rows}, 30px)`;
  boardElement.style.gridTemplateColumns = `repeat(${cols}, 30px)`;
}

const board = new Board(rows, cols);
const gridFragment = board.generateGrid();
boardElement.appendChild(gridFragment);
setGridCSS(rows + 1, cols);

const colorFragment = board.generateColorRow();
boardElement.appendChild(colorFragment);
