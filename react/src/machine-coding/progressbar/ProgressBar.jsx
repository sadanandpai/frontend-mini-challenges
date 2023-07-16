import React, { useEffect, useRef, useState } from 'react';
import styles from './ProgressBar.module.css';
import Controls from './Controls';

const totalTime = 10 * 1000;
const timeInterval = 1000;
const totalCycles = totalTime / timeInterval;

const ProgressBar = () => {
  const [currentCycle, setCurrentCycle] = useState(0);
  const [speed, setSpeed] = useState({
    max: 10,
    min: 1,
    value: 1,
    label: 'speed',
  });

  const intervalId = useRef(null);

  const startProgress = () => {
    clearInterval(intervalId.current);
    if (currentCycle >= totalCycles) {
      setCurrentCycle(0);
    }
    intervalId.current = setInterval(() => {
      setCurrentCycle((cycle) => {
        if (cycle >= totalCycles) {
          clearInterval(intervalId);
          return cycle;
        }
        return cycle + 1;
      });
    }, timeInterval / speed.value);
  };

  useEffect(() => {
    startProgress();
  }, [speed.value]);

  const pauseProgress = () => {
    clearInterval(intervalId.current);
  };

  const stopProgress = () => {
    pauseProgress();
    setCurrentCycle(0);
  };

  const handleSliderChange = (e) => {
    setSpeed((prevSpeed) => ({ ...prevSpeed, value: e.target.value }));
  };

  const getPercentage = () => (currentCycle / totalCycles) * 100;

  return (
    <>
      <div className={styles['bg-progress']}>
        <div className={styles['fg-progress']} style={{ transform: `translateX(${-100 + getPercentage()}%)` }}></div>
      </div>
      <Controls
        startProgress={startProgress}
        stopProgress={stopProgress}
        pauseProgress={pauseProgress}
        speed={speed}
        handleSliderChange={handleSliderChange}
      />
    </>
  );
};

export default ProgressBar;
