import React, { useEffect } from 'react';

import styles from './background.module.css';

const getRandomColor = (color) => {
  if (!color) {
    const letters = '0123456789ABCDEF';
    color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  }

  return color;
};

const BackgroundChanger = () => {
  const changeBodyBackground = (color) => {
    document.body.style.backgroundColor = color;
  };

  useEffect(() => () => changeBodyBackground('unset'), []);

  return (
    <div className={styles.container}>
      <button type="button" className={styles.button} onClick={() => changeBodyBackground(getRandomColor())}>
        Change Color!! 😎
      </button>
    </div>
  );
};

export default BackgroundChanger;
