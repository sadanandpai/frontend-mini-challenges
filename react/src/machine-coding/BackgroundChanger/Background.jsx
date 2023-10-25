import React from 'react'
import styles from './background.module.css';
import axios from 'axios';

const Background = () => {

  const ChangeBg = async () => {
    const options = {
      method: 'GET',
      url: 'https://colorful3.p.rapidapi.com/randomColor/2',
      headers: {
        'X-RapidAPI-Key': '4638530cfemshb5f9bea28be8a72p1d9bb8jsnef9a6f833608',
        'X-RapidAPI-Host': 'colorful3.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data[0].hex);
      document.body.style.backgroundColor=`#${response.data[0].hex}`;
    } catch (error) {
      console.error(error);
    }


  }

  return (
    <>
      <div className={styles.centerdiv}>
        <button type="button" className={styles.button} onClick={ChangeBg}>
          <div className={styles.buttontop}>Change Colour!!😎</div>
          <div className={styles.buttonbottom}></div>
          <div className={styles.buttonbase}></div>
        </button>
      </div>
    </>
  )
}

export default Background