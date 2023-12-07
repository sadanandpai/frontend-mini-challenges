import MyTable from './Table';
import Size from './Size';
import styles from './column-table.module.scss';
import { useState } from 'react';

// create a 2D matrix of size rows x columns which starts with 1 and increments by 1
function createMatrix(rows: number, columns: number): number[][] {
  const matrix: number[][] = Array.from(Array(rows), () => []);

  let count = 1,
    direction = 1,
    i = 0,
    j = 0;
  while (j < columns) {
    while (i < rows && i >= 0) {
      matrix[i][j] = count++;
      i += direction;
    }
    direction *= -1;
    i += direction;
    j += 1;
  }

  return matrix;
}

function ColumnTable() {
  const [rows, setRows] = useState(2);
  const [columns, setColumns] = useState(2);
  const values = createMatrix(rows, columns);

  return (
    <main className={styles.main}>
      <Size rows={rows} columns={columns} setRows={setRows} setColumns={setColumns} />
      <MyTable columns={columns} values={values} />
    </main>
  );
}

export default ColumnTable;
