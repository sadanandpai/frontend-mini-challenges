import { useState } from 'react';
import styles from './DigitalClock.module.css';

const Zero = (
  <div>
    <div className={styles.a}></div>
    <div className={styles.b}></div>
    <div className={styles.c}></div>
    <div className={`${styles.d} ${styles.off}`}></div>
    <div className={styles.e}></div>
    <div className={styles.f}></div>
    <div className={styles.g}></div>
  </div>
);

const One = (
  <div>
    <div className={`${styles.a} ${styles.off}`}></div>
    <div className={styles.b}></div>
    <div className={`${styles.c} ${styles.off}`}></div>
    <div className={`${styles.d} ${styles.off}`}></div>
    <div className={`${styles.e} ${styles.off}`}></div>
    <div className={styles.f}></div>
    <div className={`${styles.g} ${styles.off}`}></div>
  </div>
);

const Two = (
  <div>
    <div className={styles.a}></div>
    <div className={styles.b}></div>
    <div className={`${styles.c} ${styles.off}`}></div>
    <div className={styles.d}></div>
    <div className={styles.e}></div>
    <div className={`${styles.f} ${styles.off}`}></div>
    <div className={styles.g}></div>
  </div>
);

const Three = (
  <div>
    <div className={styles.a}></div>
    <div className={styles.b}></div>
    <div className={`${styles.c} ${styles.off}`}></div>
    <div className={styles.d}></div>
    <div className={`${styles.e} ${styles.off}`}></div>
    <div className={styles.f}></div>
    <div className={styles.g}></div>
  </div>
);

const Four = (
  <div>
    <div className={`${styles.a} ${styles.off}`}></div>
    <div className={styles.b}></div>
    <div className={styles.c}></div>
    <div className={styles.d}></div>
    <div className={`${styles.e} ${styles.off}`}></div>
    <div className={styles.f}></div>
    <div className={`${styles.g} ${styles.off}`}></div>
  </div>
);

const Five = (
  <div>
    <div className={styles.a}></div>
    <div className={`${styles.b} ${styles.off}`}></div>
    <div className={styles.c}></div>
    <div className={styles.d}></div>
    <div className={`${styles.e} ${styles.off}`}></div>
    <div className={styles.f}></div>
    <div className={styles.g}></div>
  </div>
);

const Six = (
  <div>
    <div className={styles.a}></div>
    <div className={`${styles.b} ${styles.off}`}></div>
    <div className={styles.c}></div>
    <div className={styles.d}></div>
    <div className={styles.e}></div>
    <div className={styles.f}></div>
    <div className={styles.g}></div>
  </div>
);

const Seven = (
  <div>
    <div className={styles.a}></div>
    <div className={styles.b}></div>
    <div className={`${styles.c} ${styles.off}`}></div>
    <div className={`${styles.d} ${styles.off}`}></div>
    <div className={`${styles.e} ${styles.off}`}></div>
    <div className={styles.f}></div>
    <div className={`${styles.g} ${styles.off}`}></div>
  </div>
);

const Eight = (
  <div>
    <div className={styles.a}></div>
    <div className={styles.b}></div>
    <div className={styles.c}></div>
    <div className={styles.d}></div>
    <div className={styles.e}></div>
    <div className={styles.f}></div>
    <div className={styles.g}></div>
  </div>
);

const Nine = (
  <div>
    <div className={styles.a}></div>
    <div className={styles.b}></div>
    <div className={styles.c}></div>
    <div className={styles.d}></div>
    <div className={`${styles.e} ${styles.off}`}></div>
    <div className={styles.f}></div>
    <div className={styles.g}></div>
  </div>
);

const Colons = (
  <div className={styles.colons}>
    <div className={styles.colon1}></div>
    <div className={styles.colon2}></div>
  </div>
);

const digitMap = new Map();
digitMap.set(0, Zero);
digitMap.set(1, One);
digitMap.set(2, Two);
digitMap.set(3, Three);
digitMap.set(4, Four);
digitMap.set(5, Five);
digitMap.set(6, Six);
digitMap.set(7, Seven);
digitMap.set(8, Eight);
digitMap.set(9, Nine);

function DigitalClock() {
  let today = new Date();
  const [h, setH] = useState(today.getHours() % 12 || 12);
  const [m, setM] = useState(today.getMinutes());
  const [s, setS] = useState(today.getSeconds());

  const getTime = () => {
    let currentTime = new Date();
    setH(currentTime.getHours() % 12 || 12);
    setM(currentTime.getMinutes());
    setS(currentTime.getSeconds());
  };

  setInterval(() => getTime(), 1000);

  const showDigit = (digit) => {
    return digitMap.get(digit);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.hours}>
          {showDigit(h.toString().split('').length > 1 ? +h.toString().split('')[0] : 0)}
          {showDigit(h.toString().split('').length > 1 ? +h.toString().split('')[1] : h)}
        </div>
        {Colons}
        <div className={styles.minutes}>
          {showDigit(m.toString().split('').length > 1 ? +m.toString().split('')[0] : 0)}
          {showDigit(m.toString().split('').length > 1 ? +m.toString().split('')[1] : m)}
        </div>
        {Colons}
        <div className={styles.seconds}>
          {showDigit(s.toString().split('').length > 1 ? +s.toString().split('')[0] : 0)}
          {showDigit(s.toString().split('').length > 1 ? +s.toString().split('')[1] : s)}
        </div>
      </div>
    </>
  );
}

export default DigitalClock;
