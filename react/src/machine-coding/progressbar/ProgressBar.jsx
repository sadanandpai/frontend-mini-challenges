import React, { useEffect, useState } from 'react';
import styles from './ProgressBar.module.css';

const totalTime = 10 * 1000;
const timeInterval = 1000;
const totalCycles = totalTime / timeInterval;

const ProgressBar = () => {
  const [currentCycle, setCurrentCycle] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCycle((cycle) => {
        if (cycle >= totalCycles) {
          clearInterval(intervalId);
          return cycle;
        }
        return cycle + 1;
      });
    }, timeInterval);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getPercentage = () => (currentCycle / totalCycles) * 100;

  return (
    <div className={styles['bg-progress']}>
      <div className={styles['fg-progress']} style={{ transform: `translateX(${-100 + getPercentage()}%)` }}></div>
    </div>
  );
};

export default ProgressBar;
