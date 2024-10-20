import React, { useCallback, useEffect, useRef, useState } from 'react';
import classes from './styles.module.scss';
import { Leva, useControls } from 'leva';

function App() {
  const [selections, setSelections] = useState<number[][]>([]);
  const { gridSize } = useControls({ gridSize: { value: 3, min: 2, max: 4, step: 1 } });
  const { delay } = useControls({ delay: { value: 300, min: 100, max: 700, step: 100 } });
  const cellCount = gridSize * gridSize;

  const isUndoing = useRef(false);

  function onCellClick(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    const row = Number(target.dataset.row);
    const col = Number(target.dataset.col);
    setSelections(selections.concat([[row, col]]));
  }

  const undoSelections = useCallback(
    async function () {
      isUndoing.current = true;
      for (let i = selections.length - 1; i >= 0; i--) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        setSelections(selections.slice(0, i));
      }
      isUndoing.current = false;
    },
    [selections, delay]
  );

  useEffect(() => {
    if (selections.length === cellCount) {
      undoSelections();
    }
  }, [undoSelections, selections.length, cellCount]);

  useEffect(() => {
    setSelections([]);
  }, [gridSize]);

  return (
    <div className={classes.wrapper}>
      <Leva
        collapsed
        hideCopyButton={true}
        titleBar={{ position: { x: 0, y: 40 }, filter: false, title: 'Config' }}
        theme={{
          colors: {
            highlight1: 'white',
            highlight2: 'white',
          },
        }}
      />

      <p>
        Click on cells to select them. Once all cells are selected, they will be unselected one by
        one in the reverse order they were selected.
      </p>

      <div className={classes.grid} style={{ '--grid-size': gridSize } as React.CSSProperties}>
        {Array.from({ length: gridSize }, (_, row) =>
          Array.from({ length: gridSize }, (_, col) => {
            const isSelected = selections.some((s) => s[0] === row && s[1] === col);
            return (
              <button
                key={`${row}-${col}`}
                type="button"
                className={isSelected ? classes.selected : ''}
                data-row={row}
                data-col={col}
                onClick={onCellClick}
                disabled={isSelected || isUndoing.current}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
