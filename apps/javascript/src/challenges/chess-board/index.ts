import { createBoard, markBishopMoves } from './helpers.ts';

const gridSize = 8;
const board = document.querySelector('.board') as HTMLDivElement;
const moveType = 'bishop';

function resetChessGrid() {
  const elements = document.querySelector('.board')?.getElementsByClassName('selected');
  while (elements && elements.length !== 0) {
    elements[0].classList.remove('selected');
  }
}

function onClick(event: MouseEvent) {
  resetChessGrid();

  const element = event.target as HTMLElement;
  if (element.classList.contains('box')) {
    const x = Number(element.dataset.x);
    const y = Number(element.dataset.y);

    switch (moveType) {
      case 'bishop':
        markBishopMoves(board, x, y, gridSize);
        break;
    }
  }
}

const boardFragment = createBoard(gridSize);
board.appendChild(boardFragment);
document.addEventListener('click', onClick);
