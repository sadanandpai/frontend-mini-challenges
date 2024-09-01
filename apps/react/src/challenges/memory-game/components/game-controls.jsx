import styles from '../styles.module.css';

export function GameControls({ level, isGameInProgress, isGameOver, onNext, onRestart }) {
  if (isGameInProgress) {
    return null;
  }

  if (isGameOver) {
    return (
      <div>
        <button className={styles.button} onClick={onRestart}>
          Restart
        </button>
      </div>
    );
  }

  return (
    <div>
      <button className={styles.button} onClick={onNext}>
        {level === 0 ? 'Start' : 'Next'}
      </button>
    </div>
  );
}
