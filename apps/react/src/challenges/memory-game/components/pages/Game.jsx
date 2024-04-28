import { useCallback, useContext } from 'react';
import useMeasure from './../../utils/useMeasure';
import { GameContext } from '../../context';
import GridDisplay from '../organisms/GridDisplay';
import styles from './../styles/common.module.css';

export default function Game() {
  const { dispatch, state } = useContext(GameContext);
  const [ref, { width }] = useMeasure();

  const nextClickHandler = useCallback(function () {
    dispatch({ type: 'onNextLevel' });
  });

  const HomeClickHandler = useCallback(
    function () {
      dispatch({ type: 'onReset' });
    },
    [dispatch]
  );

  return (
    <div ref={ref} style={{ position: 'relative' }} className={styles.flexColumnCenter}>
      <h3>Level {state.level}</h3>
      <GridDisplay
        userGrid={state.userGrid}
        rows={state.rows}
        cols={state.cols}
        windowWidth={width}
      />

      <h1>Life Left : {state.life}</h1>
      <h1> {state.isGameOver && 'Game Over'}</h1>
      {state.isLevelComplete && (
        <button onClick={nextClickHandler} className={styles.button}>
          Next
        </button>
      )}
      {state.isGameOver && (
        <button onClick={HomeClickHandler} className={styles.button}>
          Home
        </button>
      )}
    </div>
  );
}
