import React from 'react'
import styles from './background.module.css';

const Background = () => {

  const ChangeBg = async () => {

    // <-----------This is request with Axios----------->

    // const options = {
    //   method: 'GET',
    //   url: 'https://colorful3.p.rapidapi.com/randomColor/2',
    //   headers: {
    //     'X-RapidAPI-Key': '4638530cfemshb5f9bea28be8a72p1d9bb8jsnef9a6f833608',
    //     'X-RapidAPI-Host': 'colorful3.p.rapidapi.com'
    //   }
    // };

    // try {
    //   const response = await axios.request(options);
    //   console.log(response.data[0].hex);
    //   document.body.style.backgroundColor=`#${response.data[0].hex}`;
    // } catch (error) {
    //   console.error(error);
    // }

    // <-----------request with Axios Ends Here ----------->


    const url = 'https://colorful3.p.rapidapi.com/randomNamedColor/2';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4638530cfemshb5f9bea28be8a72p1d9bb8jsnef9a6f833608',
        'X-RapidAPI-Host': 'colorful3.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result[0].hex);
      document.body.style.backgroundColor = `#${result[0].hex}`;
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