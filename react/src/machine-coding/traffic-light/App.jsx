import { useEffect, useState } from 'react';
import styles from './trafficlight.module.css';
import config from './config';
const App = () => {
  const [currentActiveLight, setCurrentActiveLight] = useState('red');
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
        {Object.keys(config).map((light, index) => {
          return (
            <div
              className={styles.light}
              style={{ background: `${currentActiveLight === light ? `${light}` : ''}` }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
