import React, { useEffect, useState } from 'react';
import styles from './Style.module.css';
import { HiChevronUp, HiChevronDown, HiPlay, HiPause, HiRefresh } from 'react-icons/hi';

export default function TwentyfiveFiveClock() {
  const [currenState, setCurrentState] = useState('session'); // break;
  const [isRunning, setIsRunning] = useState(false);
  const [breakTime, setBreakTime] = useState({ time: 5, range: [2, 25] });
  const [sessTime, setSessTime] = useState({ time: 25, range: [5, 60] });
  const [timeLeft, setTimeLeft] = useState([25, 0]);
  const [timerInterval, setTimerInterval] = useState(null);
  const [lastMinute, setLastMinute] = useState(false);

  function start() {
    setIsRunning(true);
    setTimerInterval(setInterval(() => run(), 1000));
  }
  function pause() {
    clearInterval(timerInterval);
    setIsRunning(false);
  }
  function run() {
    setTimeLeft((prevTime) => {
      const [min, sec] = prevTime;
      if (sec === 0) {
        if (min === 0) {
          if (currenState === 'session') {
            setCurrentState('break');
            return [breakTime.time - 1, 59];
          } else {
            setCurrentState('session');
            return [sessTime.time - 1, 59];
          }
        } else {
          return [min - 1, 59];
        }
      } else {
        return [min, sec - 1];
      }
    });
  }
  function reset() {
    if (isRunning) return;
    setCurrentState('session');
    setBreakTime({ time: 5, range: [2, 25] });
    setSessTime({ time: 25, range: [5, 60] });
    setTimeLeft([25, 0]);
  }

  function prependZero(n) {
    return n > 9 ? n : `0${n}`;
  }

  function adjust(e) {
    const { target, direction } = e.currentTarget.dataset;
    const increment = direction === 'up' ? 1 : -1;

    function adjustTime(currentState, currentValue) {
      const { time, range } = currentValue;
      const newTime = time + increment;

      if (newTime >= range[0] && newTime <= range[1]) {
        const updatedTime = target === currentState ? newTime : time;
        setTimeLeft([updatedTime, 0]);
        return { time: updatedTime, range };
      }

      return currentValue;
    }

    if (target === 'break') {
      setBreakTime((currentValue) => adjustTime('break', currentValue));
    } else {
      setSessTime((currentValue) => adjustTime('session', currentValue));
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.clockWrapper}>
        <div className={styles.timeSection}>
          <div className={styles.timeAdjustment}>
            <p>{breakTime.time}</p>
            <div className={styles.timeAdjustmentButton}>
              <button onClick={adjust} data-target="break" data-direction="up">
                <HiChevronUp />
              </button>
              <button onClick={adjust} data-target="break" data-direction="down">
                <HiChevronDown />
              </button>
            </div>
          </div>
          <div className={styles.timeAdjustment}>
            <p>{sessTime.time}</p>
            <div className={styles.timeAdjustmentButton}>
              <button onClick={adjust} data-target="session" data-direction="up">
                <HiChevronUp />
              </button>
              <button onClick={adjust} data-target="session" data-direction="down">
                <HiChevronDown />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.timerDisplay}>
          <p>{currenState}</p>
          <p className={lastMinute ? styles.lastMinute : ''}>
            <span>{prependZero(timeLeft[0])}</span>:<span>{prependZero(timeLeft[1])}</span>
          </p>
          <div className={styles.buttonGroup}>
            {isRunning ? (
              <button onClick={pause}>
                <HiPause size={32} />
              </button>
            ) : (
              <button onClick={start}>
                <HiPlay size={32} />
              </button>
            )}
            <button onClick={reset}>
              <HiRefresh size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
