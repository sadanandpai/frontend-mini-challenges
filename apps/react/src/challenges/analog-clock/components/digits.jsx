import React from 'react';
import { clockDigits } from '../utils';
import styles from '../style.module.css';

export const Digits = React.memo(() => {
  return (
    <div className={styles.digits}>
      {clockDigits.map((digit, idx) => (
        <div
          key={digit}
          className={styles.digit}
          style={{
            left: `${50 + Math.sin(((Math.PI * 2) / 12) * idx) * 50}%`,
            top: `${50 - Math.cos(((Math.PI * 2) / 12) * idx) * 50}%`,
          }}
        >
          {digit}
        </div>
      ))}
    </div>
  );
});

Digits.displayName = 'Digits';
