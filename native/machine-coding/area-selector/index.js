const root = document.querySelector('.grid');
const rows = window.innerHeight / 60 - 3,
  cols = window.innerWidth / 60 - 3;
const state = [];

const fragment = document.createDocumentFragment();
for (let i = 0; i < rows; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  state.push([]);
  for (let j = 0; j < cols; j++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.dataset.x = i;
    box.dataset.y = j;
    state[i].push(box);
    row.appendChild(box);
  }
  fragment.appendChild(row);
}
root.appendChild(fragment);

let x1, y1;
root.addEventListener('mousedown', event => {
  if (event.target.classList.contains('box')) {
    x1 = event.target.dataset.x;
    y1 = event.target.dataset.y;
    markCells(x1, y1, x1, y1);
  }
});

root.addEventListener('mousemove', event => {
  if (x1 && y1) {
    if (event.target.classList.contains('box')) {
      const x2 = event.target.dataset.x;
      const y2 = event.target.dataset.y;
      unmarkCells();
      markCells(x2, y2);
    }
  }
});

root.addEventListener('mouseup', clearAction);

root.addEventListener('mouseleave', clearAction);

function clearAction() {
  x1 = null;
  y1 = null;
  unmarkCells();
}

function markCells(x2, y2) {
  if (x1 && x2 && y1 && y2) {
    const minRow = Math.min(x1, x2);
    const maxRow = Math.max(x1, x2);
    const minCol = Math.min(y1, y2);
    const maxCol = Math.max(y1, y2);

    for (let i = minRow; i <= maxRow; i++) {
      for (let j = minCol; j <= maxCol; j++) {
        state[i][j].style.backgroundColor = 'skyblue';
      }
    }
  }
}

function unmarkCells() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      state[i][j].style.backgroundColor = 'white';
    }
  }
}
