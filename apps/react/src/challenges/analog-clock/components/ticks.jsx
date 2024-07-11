import React from 'react';
import { ticksCount } from '../utils';
import styles from '../style.module.css';

export const Ticks = React.memo(() => {
  return (
    <div className={styles.ticks}>
      {Array.from({ length: ticksCount }).map((_, i) => (
        <div
          key={i}
          className={styles.tick}
          style={{
            left: `${50 + Math.sin(((Math.PI * 2) / 60) * i) * 50}%`,
            top: `${50 - Math.cos(((Math.PI * 2) / 60) * i) * 50}%`,
            rotate: `${i * 6}deg`,
          }}
        ></div>
      ))}
    </div>
  );
});

Ticks.displayName = 'Ticks';
