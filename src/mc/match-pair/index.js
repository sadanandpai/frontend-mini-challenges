import { createGridFragment } from '../../helpers/dom.js';

const rows = 4;
const cols = 4;
const positions = Array.from(new Array(rows * cols), (_, i) => i);
const delay = 2000;
const symbols = [
  '🍇',
  '🍉',
  '🚗',
  '🍌',
  '🏠',
  '🥭',
  '🍎',
  '🐯',
  '🍒',
  '🍓',
  '🐵',
  '🥝',
  '🍿',
  '🏀',
  '🎱',
  '🐻',
  '🍜',
  '🍢',
  '🎓',
  '🍤',
  '🦀',
  '🍦',
  '🍩',
  '🎂',
  '🍫',
  '🍭',
  '🍼',
  '🪔',
  '🍺',
  '🐱',
  '🐶',
];

let activeTiles = [];
let attempts = 0;
let randomizedSymbols = [];
let isResetInProgress = false;
let timeoutIdx;
const gameFrontEl = document.querySelector('.game-front');
const gameBackEl = document.querySelector('.game-back');
const outputEl = document.querySelector('output');
const restartBtn = document.querySelector('.restart');

const getRandomSymbols = (rows, cols, items) => {
  const selectedSymbols = Array.from(
    new Array((rows * cols) / 2),
    () => items[Math.floor(Math.random() * items.length)]
  );
  const totalSymbols = selectedSymbols.concat(selectedSymbols);

  const randomizedSymbols = [];
  const length = totalSymbols.length;
  for (let i = 0; i < length; i++) {
    randomizedSymbols.push(...totalSymbols.splice(Math.floor(Math.random() * totalSymbols.length), 1));
  }

  return randomizedSymbols;
};

const addClassToGameElements = (elements, className) => {
  elements.forEach(pos => {
    gameFrontEl.children[pos].classList.add(className);
    gameBackEl.children[pos].classList.add(className);
  });
};

const removeClassFromGameElement = (elements, className) => {
  elements.forEach(pos => {
    gameFrontEl.children[pos].classList.remove(className);
    gameBackEl.children[pos].classList.remove(className);
  });
};

const startGame = async (init = false) => {
  if (isResetInProgress) {
    return;
  }

  randomizedSymbols = [];
  activeTiles = [];
  attempts = 0;
  isResetInProgress = true;
  outputEl.textContent = attempts;

  if (!init) {
    gameFrontEl.classList.add('reset');
    gameBackEl.classList.add('reset');

    removeClassFromGameElement(positions, 'active');
    removeClassFromGameElement(positions, 'match');

    await new Promise(r => setTimeout(r, delay / 2)); // if not delayed then the open cards will reveal the next symbol
  }

  randomizedSymbols = getRandomSymbols(rows, cols, symbols);
  gameBackEl.childNodes.forEach((el, idx) => {
    el.textContent = randomizedSymbols[idx];
  });

  gameFrontEl.classList.remove('reset');
  gameBackEl.classList.remove('reset');
  isResetInProgress = false;
};

gameFrontEl.appendChild(createGridFragment(rows, cols, { type: 'button', className: 'tile' }));
gameBackEl.appendChild(createGridFragment(rows, cols, { type: 'button', className: 'tile back-tile' }));

gameFrontEl.addEventListener('click', e => {
  const idx = e.target.dataset.idx;

  if (idx == null || isResetInProgress || e.target.classList.contains('match')) {
    return;
  }

  attempts++;

  if (activeTiles.length === 2) {
    if (timeoutIdx) {
      clearTimeout(timeoutIdx);
    }
    removeClassFromGameElement(activeTiles, 'active');
    activeTiles = [];
  }

  activeTiles.push(idx);

  if (activeTiles.length === 2) {
    if (randomizedSymbols[activeTiles[0]] === randomizedSymbols[activeTiles[1]]) {
      removeClassFromGameElement(activeTiles, 'active');
      addClassToGameElements(activeTiles, 'match');
    }

    timeoutIdx = setTimeout(() => {
      removeClassFromGameElement(activeTiles, 'active');
      activeTiles = [];
    }, delay);
  }

  e.target.classList.add('active');
  gameBackEl.children[idx].classList.add('active');
  outputEl.textContent = attempts;
});

restartBtn.addEventListener('click', () => startGame());
startGame(true);
