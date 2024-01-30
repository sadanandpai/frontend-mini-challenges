import styles from '../styles.module.css';

function WaterTank({ onDown, onUp, onEmpty, tankLevel, capacity }) {
  return (
    <div>
      <div className={styles.controls}>
        <button
          onMouseDown={onDown}
          onMouseUp={onUp}
          onTouchStart={onDown}
          onTouchEnd={onUp}
          className={styles['add-btn']}
        >
          Add
        </button>
        <button onClick={onEmpty} className={styles['empty-btn']}>
          Empty
        </button>
      </div>

      <div className={styles.tank}>
        <div
          className={styles['tank-level']}
          style={{ height: `${(100 * tankLevel) / capacity}%` }}
        ></div>
      </div>

      <p className={styles['text-center']}>{tankLevel} lts</p>
    </div>
  );
}

export default WaterTank;
