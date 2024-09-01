import { useEffect, useRef, useState } from 'react';
import { getMemoryGrid } from '../utils/utils';
import { Grid } from './grid';
import { config } from '../config';

export default function GridDisplay({ rows, cols, onError, onComplete, disabled }) {
  const [userGrid, setUserGrid] = useState([]);
  const activeCells = useRef(0);
  const gridRef = useRef();
  const gameInProgress = useRef(false);

  useEffect(() => {
    const { grid, activeCount } = getMemoryGrid(rows, cols);
    setUserGrid(grid);
    gridRef.current = grid;
    activeCells.current = activeCount;

    const timeoutId = setTimeout(() => {
      setUserGrid((prevGrid) => prevGrid.map((rows) => rows.map(() => false)));
      gameInProgress.current = true;
    }, config.timer);

    return () => clearTimeout(timeoutId);
  }, [rows, cols]);

  function onCellClick(rowIndex, colIndex) {
    // If the cell is already clicked or the game is not in progress
    if (userGrid[rowIndex][colIndex] || !gameInProgress.current) {
      return;
    }

    // If the cell is active
    if (gridRef.current[rowIndex][colIndex]) {
      setUserGrid((prevGrid) =>
        prevGrid.map((rows, rIndex) =>
          rows.map((cell, cIndex) => (rIndex === rowIndex && cIndex === colIndex ? true : cell))
        )
      );

      gridRef.current[rowIndex][colIndex] = false;
      activeCells.current = activeCells.current - 1;
    } else {
      // If the cell is not active
      onError();
    }

    // If all the active cells are clicked
    if (activeCells.current === 0) {
      onComplete();
      gameInProgress.current = false;
    }
  }

  return (
    <Grid rows={userGrid.length} cols={userGrid[0]?.length} width={0.9 * window.innerWidth}>
      {userGrid.map((rows, rowIndex) =>
        rows.map((cell, colIndex) => (
          <button
            disabled={disabled}
            key={`${rowIndex}-${colIndex}`}
            onClick={() => onCellClick(rowIndex, colIndex)}
            style={{ backgroundColor: cell ? 'yellow' : 'white' }}
          />
        ))
      )}
    </Grid>
  );
}
