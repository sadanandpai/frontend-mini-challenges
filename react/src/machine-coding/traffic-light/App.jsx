import { useEffect, useState } from 'react';
import styles from './trafficlight.module.css';
import config from './config';
const App = () => {
  const [currentActiveLight, setCurrentActiveLight] = useState('red');
  const [currentDuration, setCurrentDuration] = useState(config[currentActiveLight].duration);
  useEffect(() => {
    let timer;

    if (currentDuration <= 0) {
      setCurrentDuration(config[currentActiveLight].duration);
    } else {
      timer = setInterval(() => {
        setCurrentDuration(currentDuration - 1000);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [currentDuration]);
  useEffect(() => {
    let timerId;
    const { duration, next } = config[currentActiveLight];
    timerId = setTimeout(() => {
      setCurrentActiveLight(next);
    }, duration);
    return () => clearTimeout(timerId);
  }, [currentActiveLight]);
  return (
    <div className={styles.AppContainer}>
      <div className={styles.trafficWrapper}>
        {Object.keys(config).map((light) => {
          return (
            <div
              key={config[light].id}
              className={styles.light}
              style={{ background: `${currentActiveLight === light ? `${light}` : ''}` }}
            ></div>
          );
        })}
      </div>
      <div className={styles.countdownContainer}>
        <span className={`${styles.countdownTime} ${styles.active}`}>
          {' '}
          {Math.floor(currentDuration / 1000)} Seconds
        </span>
      </div>
    </div>
  );
};

export default App;
