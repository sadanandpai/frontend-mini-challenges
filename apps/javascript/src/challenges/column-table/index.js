const rowsEl = document.querySelector('#rows');
const columnsEl = document.querySelector('#columns');
const tableBodyEl = document.querySelector('.table-body');

let rows = +rowsEl.value;
let columns = +columnsEl.value;

function createMatrix(rows, columns) {
  const matrix = Array.from(Array(rows), () => []);

  let count = 1;
  let direction = 1;
  let rowIndex = 0;
  let columnIndex = 0;

  while (columnIndex < columns) {
    while (rowIndex >= 0 && rowIndex < rows) {
      matrix[rowIndex][columnIndex] = count++;
      rowIndex += direction;
    }

    direction *= -1;
    rowIndex += direction;
    columnIndex += 1;
  }

  return matrix;
}

function generateTable(rows, columns) {
  const matrix = createMatrix(rows, columns);
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement('td');
      cell.textContent = matrix[i][j];
      cell.classList.add('cell');
      row.appendChild(cell);
    }
    fragment.appendChild(row);
  }

  return fragment;
}

function updateTable() {
  tableBodyEl.replaceChildren(generateTable(rows, columns));
}

rowsEl.addEventListener('change', () => {
  rows = +rowsEl.value;
  updateTable();
});

columnsEl.addEventListener('change', () => {
  columns = +columnsEl.value;
  updateTable();
});

updateTable();
