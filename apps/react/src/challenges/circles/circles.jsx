import { useState } from 'react';
import styles from './style.module.css';

const maxSize = Math.min(window.innerWidth - 120, window.innerHeight - 200);
const minSize = 50;

const Circles = () => {
  const [circles, setCircles] = useState(1);
  const gap = (maxSize - minSize) / circles;

  const onCirclesChange = (e) => {
    if (+e.target.value > 2000) {
      setCircles(2000);
      return;
    }

    if (+e.target.value < 1) {
      setCircles(1);
      return;
    }

    setCircles(+e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <label htmlFor="circles">Number of circles:</label>
        <input
          type="number"
          id="circles"
          value={circles}
          min="0"
          max="2000"
          onChange={onCirclesChange}
        />
      </div>

      <div className={styles.box} style={{ height: maxSize, width: maxSize }}>
        {Array.from({ length: circles }, (_, idx) => idx).map((idx) => (
          <div
            key={idx}
            className={styles.circle}
            style={{ height: maxSize - idx * gap, width: maxSize - idx * gap }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Circles;
