import { useState } from 'react';
import styles from './chess-board.module.scss';
import { Box } from './box';

const gridSize = 8;

function App() {
  const [selectedTile, setSelectedTile] = useState<{ row: number; col: number } | null>(null);

  function colorDiagonally(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    setSelectedTile({
      row: Number(target.dataset.row),
      col: Number(target.dataset.col),
    });
  }

  return (
    <>
      <p className={styles.instruction}>Click on any cell to color diagonally</p>

      <div className={styles.board}>
        {Array.from({ length: gridSize }, (_, row) => (
          <div key={row} className={styles.row}>
            {Array.from({ length: gridSize }, (_, col) => (
              <Box
                key={col}
                row={row}
                col={col}
                selectedTile={selectedTile}
                onClick={colorDiagonally}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
