import React from 'react'
import styles from './background.module.css';

const Background = () => {

  const ChangeBg = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    document.body.style.backgroundColor = color;
  }



  return (
    <>
      <div className={styles.centerdiv}>
        <button type="button" className={styles.button} onClick={ChangeBg}>
          <div className={styles.buttontop}>Change Colour!!😎</div>
          <div className={styles.buttonbottom}></div>
          <div className={styles.buttonBase}></div>
        </button>
      </div>
    </>
  )
}

export default Background