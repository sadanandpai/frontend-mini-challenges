import { useState } from 'react';
import { config } from './config';
import Game from './components/game';
import styles from './styles.module.css';
import { GameControls } from './components/game-controls';

function MemoryGame() {
  const [size, setSize] = useState({ rows: config.rows - 1, cols: config.cols });
  const [life, setLife] = useState(config.life);
  const [level, setLevel] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameInProgress, setIsGameInProgress] = useState(false);

  function onNext() {
    setLevel(level + 1);
    setIsGameInProgress(true);

    if (size.rows > size.cols) {
      setSize({ rows: size.rows, cols: size.cols + 1 });
    } else {
      setSize({ rows: size.rows + 1, cols: size.cols });
    }
  }

  function onComplete() {
    setIsGameInProgress(false);
  }

  function onError() {
    setLife(life - 1);

    if (life === 1) {
      setIsGameOver(true);
      setIsGameInProgress(false);
    }
  }

  function onRestart() {
    setLevel(1);
    setLife(config.life);
    setIsGameOver(false);
    setIsGameInProgress(true);
    setSize({ rows: config.rows, cols: config.cols });
  }

  return (
    <main className={styles.container}>
      <header>
        <p>Remember the colored boxes displayed and click on the boxes once the game starts</p>
      </header>

      <Game level={level} size={size} onComplete={onComplete} onError={onError} life={life} />

      <GameControls
        level={level}
        isGameInProgress={isGameInProgress}
        isGameOver={isGameOver}
        onNext={onNext}
        onRestart={onRestart}
      />
    </main>
  );
}

export default MemoryGame;
