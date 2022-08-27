export function Board(row, col) {
  this.row = row;
  this.col = col;
}

Board.prototype.setColor = function (color) {
  this.color = color;
};

Board.prototype.generateGrid = function () {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < this.row * this.col; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    fragment.appendChild(div);
  }

  return fragment;
};

Board.prototype.generateColorRow = function () {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < this.col; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.classList.add('palette');
    div.style.backgroundColor = getGetHEXColorCode();
    fragment.appendChild(div);
  }

  return fragment;
};

function getGetHEXColorCode() {
  const rValue = Math.round(0xff * Math.random())
    .toString(16)
    .padStart(2, '0');
  const gValue = Math.round(0xff * Math.random())
    .toString(16)
    .padStart(2, '0');
  const bValue = Math.round(0xff * Math.random())
    .toString(16)
    .padStart(2, '0');
  return '#' + rValue + gValue + bValue;
}
