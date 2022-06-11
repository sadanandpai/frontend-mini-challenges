'use strict';

var board = document.querySelector('.board');
var clickedOnCell = false;
createBoard(board, 8);

function createBoard(element, rows, cols = rows) {
  var gridDocFragment = document.createDocumentFragment();
  for (let i = 0; i < rows; i++) {
    var row = document.createElement('div');
    for (let j = 0; j < cols; j++) {
      var col = document.createElement('div');
      col.dataset.locX = i;
      col.dataset.locY = j;
      col.classList.add('box');
      row.appendChild(col);
    }
    gridDocFragment.appendChild(row);
  }
  element.appendChild(gridDocFragment);
}

document.addEventListener('click', onClick);

function onClick(event) {
  var element = event.target;

  if (clickedOnCell) resetChessGrid();

  if (element.classList.contains('box')) {
    clickedOnCell = true;
    setColor(element);
    let y1 = +element.dataset.locY;
    let y2 = +element.dataset.locY;

    let ePrev = element.parentElement.previousElementSibling,
      eNext = element.parentElement.nextElementSibling;

    do {
      if (ePrev) {
        setColor(ePrev.querySelector("[data-loc-y='" + (y1 - 1) + "']"));
        setColor(ePrev.querySelector("[data-loc-y='" + (y2 + 1) + "']"));
      }
      if (eNext) {
        setColor(eNext.querySelector("[data-loc-y='" + (y1 - 1) + "']"));
        setColor(eNext.querySelector("[data-loc-y='" + (y2 + 1) + "']"));
      }
      y1--;
      y2++;
      ePrev = ePrev ? ePrev.previousElementSibling : ePrev;
      eNext = eNext ? eNext.nextElementSibling : eNext;
    } while (ePrev || eNext);
  } else resetChessGrid();
}

function setColor(element) {
  if (element) element.classList.add('selected');
}

function resetChessGrid() {
  clickedOnCell = false;
  const elements = document.querySelector('.board').getElementsByClassName('selected');
  while (elements.length !== 0) elements[0].classList.remove('selected');
}
