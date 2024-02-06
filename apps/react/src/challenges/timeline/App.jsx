import React from 'react';
import styles from './timeline.module.css';
import TimelineData from './data';

const App = () => {
  return (
    <>
      <div className={styles.AppContainer}>
        <div className={styles.container}>
          <div className={styles.timeline}>
            <ul>
              {TimelineData.map((item, index) => (
                <li key={index}>
                  <div className={styles.timeline_content}>
                    <h3 className={styles.date}>{item.date}</h3>
                    <h1>{item.title}</h1>
                    <p>{item.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
