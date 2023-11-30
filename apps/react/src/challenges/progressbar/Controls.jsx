import React from 'react';
import styles from './ProgressBar.module.css';

const Controls = ({ startProgress, pauseProgress, stopProgress, handleSliderChange, speed }) => {
  return (
    <>
      <div className={styles['controls']}>
        <button onClick={startProgress}>Start</button>
        <button onClick={pauseProgress}>Pause</button>
        <button onClick={stopProgress}>Reset</button>
      </div>
      <div className={styles['slidecontainer']}>
        <input
          type="range"
          min={speed.min}
          max={speed.max}
          defaultValue={speed.min}
          className="slider"
          id="myRange"
          onChange={handleSliderChange}
        />
        <div>
          <label htmlFor="myRange">
            <small>Speed: {speed.value} </small>
          </label>
        </div>
      </div>
    </>
  );
};

export default Controls;
