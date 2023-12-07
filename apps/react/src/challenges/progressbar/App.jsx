import React from 'react';
import ProgressBar from './ProgressBar';
import styles from './ProgressBar.module.css';

const App = () => {
  return (
    <div className={styles['App']}>
      <ProgressBar />
    </div>
  );
};

export default App;
