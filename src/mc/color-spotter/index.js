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

var element = document.getElementById('board');
var startingSize = 4;
// updateStartingSize(startingSize);
var gameSize = startingSize;

// Scores
var score = 0;
var maxScore = 0;

// Do not allow click while board is shaking
var clickAllowed = true;

createBoard(element, gameSize);

function createBoard(element, size) {
  var gridDocFragment = document.createDocumentFragment();

  var gridColor = getRandomColors();
  var oddCellX = Math.ceil(Math.random() * size);
  var oddCellY = Math.ceil(Math.random() * size);

  for (let i = 1; i <= size; i++) {
    var row = document.createElement('div');
    for (let j = 1; j <= size; j++) {
      var col = document.createElement('div');
      col.dataset.locX = i;
      col.dataset.locY = j;
      col.classList.add('box');

      if (i === oddCellX && j === oddCellY) {
        col.style.backgroundColor = gridColor.oddColor;
        col.classList.add('odd-box');
      } else {
        col.style.backgroundColor = gridColor.color;
      }

      row.appendChild(col);
    }
    gridDocFragment.appendChild(row);
  }
  element.appendChild(gridDocFragment);
}

document.addEventListener('click', event => {
  if (!clickAllowed) return;
  if (event.target.classList.contains('box')) {
    if (event.target.classList.contains('odd-box')) {
      element.innerHTML = '';
      document.getElementById('score').textContent = ++score;
      createBoard(element, ++gameSize);
      document.getElementById('statingSizeSelector').disabled = true;
    } else {
      clickAllowed = false;
      document.querySelector('.odd-box').style.border = '2px solid red';
      shakeTheGrid(function () {
        updateScores();
        element.innerHTML = '';
        gameSize = startingSize;
        createBoard(element, gameSize);
        clickAllowed = true;
      });
    }
  }
});

document.getElementById('statingSizeSelector').addEventListener('input', function () {
  updateStartingSize(this.value);
});

function updateStartingSize(value) {
  document.getElementById('statingSizeSelectorOutput').textContent = value;
  startingSize = value;
  gameSize = startingSize;

  if (score === 0) {
    element.innerHTML = '';
    createBoard(element, gameSize);
  }
}

function shakeTheGrid(callback) {
  element.classList.add('shake');
  setTimeout(() => {
    element.classList.remove('shake');
    callback();
  }, 2000);
}

function updateScores() {
  if (score > maxScore) {
    document.getElementById('maxScore').textContent = score;
    maxScore = score;
  }
  score = 0;
  document.getElementById('score').textContent = score;
  document.getElementById('statingSizeSelector').disabled = false;
}
