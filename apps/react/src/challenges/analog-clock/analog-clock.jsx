import { useEffect, useState } from 'react';
import { getTimeInAngles } from './utils';
import { Digits } from './components/digits';
import { Ticks } from './components/ticks';

import styles from './style.module.css';

const AnalogClock = () => {
  const [angles, setAngles] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const setClockHands = () => {
      setAngles(getTimeInAngles(new Date()));
    };

    setClockHands();
    setInterval(setClockHands, 1000);

    return () => {
      clearInterval(setClockHands);
    };
  }, []);

  return (
    <div className={styles.clock} style={{ overflow: 'hidden' }}>
      <img
        src="https://images.unsplash.com/photo-1512428813834-c702c7702b78"
        alt=""
        className={styles.bgImg}
      />
      <Ticks />
      <Digits />

      <div className={styles.centerConnector}></div>
      <div className={styles.hoursHand} style={{ rotate: `${angles.hours}deg` }}></div>
      <div className={styles.minutesHand} style={{ rotate: `${angles.minutes}deg` }}></div>
      <div className={styles.secondsHand} style={{ rotate: `${angles.seconds}deg` }}></div>
    </div>
  );
};

export default AnalogClock;
