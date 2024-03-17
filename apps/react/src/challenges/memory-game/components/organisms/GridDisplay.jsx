import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { setCellOnClick, setUserGridAsync } from '../../store/dataSlice';
import Cell from '../atoms/Cell';

const Grid = styled.div.attrs((props) => ({
  style: {
    gridTemplateRows: `repeat(${props.rows}, 1fr)`,
    gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
    width: `${props.width - 20}px`,
    height: `${((props.width - 20) / props.cols) * props.rows}px`,
    maxHeight: `${props.rows * 100}px`,
    maxWidth: `${props.cols * 100}px`,
  },
}))`
  display: grid;
  grid-gap: 4px;
  background-color: #329cef;
  border: 2px solid #329cef;
  transition: all 0.25s;
`;

export default function GridDisplay({ userGrid, windowWidth }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // Fit inside the widnow height
  const windowHeight = window.innerHeight - 230;
  if (windowWidth > windowHeight) {
    windowWidth = windowHeight;
  }

  useEffect(() => {
    dispatch(setUserGridAsync());
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
        dispatch(setCellOnClick({ rowIndex, colIndex }));
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
