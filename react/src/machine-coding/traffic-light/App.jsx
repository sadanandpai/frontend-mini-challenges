import { useEffect, useState } from 'react';

import config from './config';
import styles from './trafficlight.module.css';

const App = () => {
  const [currentActiveLight, setCurrentActiveLight] = useState('red');
  const [currentDuration, setCurrentDuration] = useState(config[currentActiveLight].duration);

  useEffect(() => {
    let timerId;
    if (currentDuration <= 0) {
      clearInterval(timerId);
      setCurrentActiveLight(config[currentActiveLight].next);
      setCurrentDuration(Number(config[config[currentActiveLight].next].duration));
    } else {
      timerId = setInterval(() => {
        setCurrentDuration((prevDuration) => prevDuration - 1000);
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [currentDuration, currentActiveLight]);

  return (
    <div className={styles.AppContainer}>
      <div className={styles.trafficWrapper}>
        {Object.keys(config).map((light) => (
          <div
            key={config[light].id}
            className={styles.light}
            style={{ background: currentActiveLight === light ? light : '' }}
          ></div>
        ))}
      </div>
      <div className={styles.countdownContainer}>
        <span className={`${styles.countdownTime} ${styles.active}`}>{Math.floor(currentDuration / 1000)} Seconds</span>
      </div>
    </div>
  );
};

export default App;
