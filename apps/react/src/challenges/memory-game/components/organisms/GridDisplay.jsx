import { useEffect, useCallback, useContext } from 'react';
import styles from './organisms.module.css';
import Cell from '../atoms/Cell';
import { GameContext } from '../../context';

const Grid = (props) => {
  const gridStyle = {
    gridTemplateRows: `repeat(${props.rows}, 1fr)`,
    gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
    width: `${props.width - 20}px`,
    height: `${((props.width - 20) / props.cols) * props.rows}px`,
    maxHeight: `${props.rows * 100}px`,
    maxWidth: `${props.cols * 100}px`,
  };
  return (
    <div className={styles.grid} style={gridStyle} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default function GridDisplay({ userGrid, windowWidth }) {
  const { dispatch, state } = useContext(GameContext);
  // Fit inside the widnow height
  const windowHeight = window.innerHeight - 230;
  if (windowWidth > windowHeight) {
    windowWidth = windowHeight;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: 'setEmptyUserGrid' });
      dispatch({ type: 'setLevelReadyForClick', payload: true });
    }, 3000);
    () => {
      clearTimeout(timer);
    };
  }, [dispatch, state.level]);

  const onCellClick = useCallback(
    function (event) {
      if (!state.isLevelReadyForClick) {
        return;
      }

      const target = event.target;

      if (target.classList.contains('cell')) {
        const rowIndex = target.dataset.rowIndex;
        const colIndex = target.dataset.colIndex;
        dispatch({ type: 'setCellOnClick', payload: { rowIndex, colIndex } });
      }
    },
    [dispatch, state.isLevelReadyForClick]
  );

  return (
    <Grid
      rows={userGrid.length}
      cols={userGrid[0].length}
      onClick={onCellClick}
      width={windowWidth}
    >
      {userGrid.map((rows, rowIndex) =>
        rows.map((cell, colIndex) => (
          <Cell
            rowIndex={rowIndex}
            colIndex={colIndex}
            key={rowIndex + '' + colIndex}
            backgroundColor={cell ? 'yellow' : undefined}
          />
        ))
      )}
    </Grid>
  );
}
