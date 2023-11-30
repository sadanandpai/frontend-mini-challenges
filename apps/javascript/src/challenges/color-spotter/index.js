const getRandomColors = function () {
  var ratio = 0.618033988749895;

  var hue = (Math.random() + ratio) % 1;
  var saturation = Math.round(Math.random() * 100) % 85;
  var lightness = Math.round(Math.random() * 100) % 85;

  var color = 'hsl(' + Math.round(360 * hue) + ',' + saturation + '%,' + lightness + '%)';
  var oddColor = 'hsl(' + Math.round(360 * hue) + ',' + saturation + '%,' + (lightness + 5) + '%)';

  return {
    color,
    oddColor,
  };
};

const board = document.getElementById('board');
const initSize = 3;
let size = initSize,
  score = 0,
  maxScore = +localStorage.getItem('maxScore'),
  clickAllowed = true;

function createBoard(board, size) {
  const gridFragment = document.createDocumentFragment();
  const colors = getRandomColors();
  const oddCellX = Math.ceil(Math.random() * size);
  const oddCellY = Math.ceil(Math.random() * size);

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      var cell = document.createElement('button');
      cell.dataset.locX = i;
      cell.dataset.locY = j;
      cell.classList.add('box');

      if (i === oddCellX && j === oddCellY) {
        cell.style.backgroundColor = colors.oddColor;
        cell.classList.add('odd-box');
      } else {
        cell.style.backgroundColor = colors.color;
      }

      gridFragment.appendChild(cell);
    }
  }

  board.appendChild(gridFragment);
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function shakeTheGrid(callback) {
  board.classList.add('shake');
  setTimeout(() => {
    board.classList.remove('shake');
    callback();
  }, 2000);
}

function updateScores() {
  if (score > maxScore) {
    document.getElementById('maxScore').textContent = score;
    maxScore = score;
    localStorage.setItem('maxScore', maxScore);
  }
  score = 0;
  document.getElementById('score').textContent = score;
}

document.addEventListener('click', (event) => {
  if (!clickAllowed) return;

  if (!event.target.classList.contains('box')) {
    return;
  }

  if (event.target.classList.contains('odd-box')) {
    board.innerHTML = '';
    document.getElementById('score').textContent = ++score;
    createBoard(board, ++size);
  } else {
    clickAllowed = false;
    document.querySelector('.odd-box').style.border = '2px solid red';
    shakeTheGrid(function () {
      updateScores();
      board.innerHTML = '';
      size = initSize;
      createBoard(board, size);
      clickAllowed = true;
    });
  }
});

createBoard(board, size);
document.getElementById('maxScore').textContent = maxScore;
