const n = 9; //number of bars to sort
const array = [];
init();

//generate random numbers
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

//function for animating the bars
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

//implement the bubble sort function
function bubbleSort(array) {
  const moves = [];
  do {
    var swapped = false;
    for (let i = 1; i < array.length; i++) {
      moves.push({ indices: [i - 1, i], type: 'comp' }); //we require type swap because we need to differentiate when we are comparing and when we are swapping to show respective move color.
      if (array[i - 1] > array[i]) {
        swapped = true;
        moves.push({ indices: [i - 1, i], type: 'swap' }); //we require type swap because we need to differentiate when we are comparing and when we are swapping to show respective move color.
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
      }
    }
  } while (swapped);
  return moves;
}

//render the bars dynamically in the index html file
function showBars(move) {
  container.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement('div');
    bar.style.height = array[i] * 10 + '%';
    bar.classList.add('bar');
    bar.innerHTML = Math.floor(array[i] * 10);
    if (move && move.indices.includes(i)) {
      bar.style.backgroundColor = move.type == 'swap' ? 'red' : 'green'; //red if swapping green if comparing
    }
    container.appendChild(bar);
  }
}
