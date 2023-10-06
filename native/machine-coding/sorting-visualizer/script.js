const n = 9;
const array = [];
init();

console.log(window.location.pathname);

function init() {
  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * (11 - 1) + 1);
  }
  showBars();
}

function play() {
  const copy = [...array];
  const moves = bubbleSort(copy);
  animate(moves);
}

function animate(moves) {
  if (moves.length == 0) {
    showBars();
    return;
  }
  const move = moves.shift();
  const [i, j] = move.indices;
  if (move.type == 'swap') {
    [array[i], array[j]] = [array[j], array[i]];
  }
  showBars(move);
  setTimeout(function () {
    animate(moves);
  }, 200);
}

function bubbleSort(array) {
  const moves = [];
  do {
    var swapped = false;
    for (let i = 1; i < array.length; i++) {
      moves.push({ indices: [i - 1, i], type: 'comp' });
      if (array[i - 1] > array[i]) {
        swapped = true;
        moves.push({ indices: [i - 1, i], type: 'swap' });
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
      }
    }
  } while (swapped);
  return moves;
}

function showBars(move) {
  container.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement('div');
    bar.style.height = array[i] * 10 + '%';
    bar.classList.add('bar');
    bar.innerHTML = Math.floor(array[i] * 10);
    if (move && move.indices.includes(i)) {
      bar.style.backgroundColor = move.type == 'swap' ? 'red' : 'green';
    }
    container.appendChild(bar);
  }
}
