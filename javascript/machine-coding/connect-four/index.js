import { generateFlex, generateGrid, getGridState, hasSameValuesContinously } from './helper.js';

const boardElement = document.getElementById('board');
const slotsElement = document.getElementById('slots');
const resetElement = document.getElementById('reset');
const infoElement = document.getElementById('info');

const rows = 6;
const cols = 7;
const winningCount = 4;

const game = {
  activePlayer: 1,
  state: getGridState(rows, cols),
  winner: null,

  getActiveColor() {
    return this.activePlayer === 1 ? 'blue' : 'red';
  },

  switchPlayer() {
    this.activePlayer = this.activePlayer === 1 ? 2 : 1;
  },

  isStateFull() {
    return this.state[0].every(value => value !== 0);
  },

  reset() {
    this.state = getGridState(rows, cols);
    this.winner = null;
    this.activePlayer = 1;
  },
};

const setGridCSS = (rows, cols) => {
  boardElement.style.gridTemplateRows = `repeat(${rows}, 5em)`;
  boardElement.style.gridTemplateColumns = `repeat(${cols}, 5em)`;
};

const displayPlayerIcon = col => {
  const element = slotsElement.querySelector('.active');
  if (element) {
    element.classList.remove('active');
    element.style.backgroundColor = 'transparent';
  }
  slotsElement.children[col].classList.add('active');
  slotsElement.children[col].style.backgroundColor = game.getActiveColor();
};

const hidePlayerIcon = () => {
  const element = slotsElement.querySelector('.active');
  if (element) {
    element.classList.remove('active');
    element.style.backgroundColor = 'transparent';
  }
};

const insertToColumn = col => {
  let i = 0;
  for (i = 0; i < rows; i++) {
    if (game.state[i][col] !== 0) {
      break;
    }
  }

  if (i - 1 < 0) {
    return i - 1;
  }

  game.state[i - 1][col] = game.activePlayer;
  boardElement.children[col + (i - 1) * cols].style.backgroundColor = game.getActiveColor();
  return i - 1;
};

const checkForWinner = (row, col) => {
  const player = game.state[row][col];
  const winningCountMinusOne = winningCount - 1;
  const winningCountDiagonal = winningCount * 2 - 1;

  const valueRow = game.state[row].slice(Math.max(0, col - winningCountMinusOne), col + winningCount);
  if (hasSameValuesContinously(valueRow, player, winningCount)) return true;

  const column = game.state.map(row => row[col]);
  const valueColumn = column.slice(row, row + winningCount);
  if (hasSameValuesContinously(valueColumn, player, winningCount)) return true;

  const diagonalIndeces1 = new Array(winningCountDiagonal).fill(0).map((_, i) => i - winningCountMinusOne);
  const diagonal1 = diagonalIndeces1.map(i => game.state[row + i]?.[col + i]);
  if (hasSameValuesContinously(diagonal1, player, winningCount)) return true;

  const diagonalIndeces2 = new Array(winningCountDiagonal).fill(0).map((_, i) => i - winningCountMinusOne);
  const diagonal2 = diagonalIndeces2.map(i => game.state[row + i]?.[col - i]);
  if (hasSameValuesContinously(diagonal2, player, winningCount)) return true;

  return false;
};

const init = () => {
  const slotsFragment = generateFlex(cols, 'slot');
  slotsElement.innerHTML = '';
  slotsElement.appendChild(slotsFragment);

  const gridFragment = generateGrid(rows, cols, 'box');
  boardElement.innerHTML = '';
  boardElement.appendChild(gridFragment);

  infoElement.textContent = '';
};

const onClickToPlay = event => {
  if (game.winner) {
    return;
  }

  const target = event.target;
  if (target.classList.contains('box') || target.classList.contains('slot')) {
    const col = +target.dataset.j;
    const row = insertToColumn(col);

    if (row < 0) {
      return;
    }

    if (checkForWinner(row, col)) {
      game.winner = game.activePlayer;
      infoElement.textContent = `Player ${game.getActiveColor()} wins!`;
      hidePlayerIcon();
      return;
    }

    if (row === 0 && game.isStateFull()) {
      game.winner = -1;
      infoElement.textContent = 'Draw!';
      hidePlayerIcon();
      return;
    }

    game.switchPlayer();
    displayPlayerIcon(col);
  }
};

const onMouseOverToPlay = event => {
  if (game.winner) {
    return;
  }

  const target = event.target;
  if (target.classList.contains('box') || target.classList.contains('slot')) {
    displayPlayerIcon(target.dataset.j);
  }
};

resetElement.addEventListener('click', function () {
  game.reset();
  init();
});

boardElement.addEventListener('click', onClickToPlay);
slotsElement.addEventListener('click', onClickToPlay);
boardElement.addEventListener('mouseover', onMouseOverToPlay);
slotsElement.addEventListener('mouseover', onMouseOverToPlay);

init();
setGridCSS(rows, cols);
