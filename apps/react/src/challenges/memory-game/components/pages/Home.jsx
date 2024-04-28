import { useCallback, useContext } from 'react';
import { GameContext } from '../../context';
import styles from './../styles/common.module.css';

const Container = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default function Home() {
  const { dispatch } = useContext(GameContext);
  const startClickHandler = useCallback(
    function () {
      dispatch({ type: 'onNextLevel' });
    },
    [dispatch]
  );

  return (
    <Container>
      <header>
        <h1>Memory Game</h1>
      </header>
      <div>
        <div style={{ margin: '50px' }}>
          <p>Remember the colored boxes displayed and click on the boxes once the game starts</p>
          <p>Difficulty will increase with each level</p>
        </div>
        <button
          style={{ fontSize: '1.5rem' }}
          onClick={startClickHandler}
          className={styles.button}
        >
          Start
        </button>
      </div>
    </Container>
  );
}
