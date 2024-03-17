import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../styles/common';
import { onNextLevel, onReset } from '../../store/dataSlice';
import { useMeasure } from 'react-use';

import { FlexColumnCenter } from '../styles/common';
import GridDisplay from '../organisms/GridDisplay';
import LivesManager from '../organisms/LivesManager';
import GameOver from '../atoms/GameOver';

export default function Game() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [ref, { width }] = useMeasure();

  const nextClickHandler = useCallback(
    function () {
      dispatch(onNextLevel());
    },
    [dispatch]
  );

  const HomeClickHandler = useCallback(
    function () {
      dispatch(onReset());
    },
    [dispatch]
  );

  return (
    <FlexColumnCenter ref={ref} style={{ position: 'relative' }}>
      <h3>Level {state.level}</h3>
      <GridDisplay
        userGrid={state.userGrid}
        rows={state.rows}
        cols={state.cols}
        windowWidth={width}
      />
      <GameOver isGameOver={state.isGameOver} />
      <LivesManager lives={state.life} />
      {state.isLevelComplete && <Button onClick={nextClickHandler}>Next</Button>}
      {state.isGameOver && <Button onClick={HomeClickHandler}>Home</Button>}
    </FlexColumnCenter>
  );
}
