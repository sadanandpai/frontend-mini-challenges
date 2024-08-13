const gridContainer = document.getElementById('grid');
const inputBox = document.getElementById('inputBox');

let activeElementIdx = null;

function createGridItem(value) {
  const gridItem = document.createElement('div');
  gridItem.className = 'grid-item';
  gridItem.textContent = value;
  gridItem.dataset.value = value;
  return gridItem;
}

function createGrid(size = 3) {
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= size * size; i++) {
    fragment.appendChild(createGridItem(i));
  }

  return fragment;
}

function changeColor(event) {
  event.preventDefault();
  if (activeElementIdx) {
    gridItems[activeElementIdx - 1].classList.remove('active');
  }

  activeElementIdx = parseInt(inputBox.value, 10);
  gridItems[activeElementIdx - 1].classList.add('active');
  inputBox.value = '';
}

gridContainer.appendChild(createGrid());
const gridItems = gridContainer.querySelectorAll('.grid-item');
document.getElementById('colorForm').addEventListener('submit', changeColor);
