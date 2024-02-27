import { useState } from "react";
import styles from "./App.module.css";
import Digit from "./digit";

function App() {
  let today = new Date();
  const [h, setH] = useState(today.getHours() % 12 || 12);
  const [m, setM] = useState(today.getMinutes());
  const [s, setS] = useState(today.getSeconds());

  const getTime = () => {
    setH(new Date().getHours() % 12 || 12);
    setM(new Date().getMinutes());
    setS(new Date().getSeconds());
  }
  
  setInterval(() => getTime(), 1000)
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hours}>
          <Digit digit={h.toString().split('').length > 1 ? +h.toString().split('')[0] : 0} />
          <Digit digit={h.toString().split('').length > 1 ? +h.toString().split('')[1] : h} />
        </div>
        <div className={styles.colons}>
          <div className={styles.colon1}></div>
          <div className={styles.colon2}></div>
        </div>
        <div className={styles.minutes}>
          <Digit digit={m.toString().split('').length > 1 ? +m.toString().split('')[0] : 0} />
          <Digit digit={m.toString().split('').length > 1 ? +m.toString().split('')[1] : m} />
        </div>
        <div className={styles.colons}>
          <div className={styles.colon1}></div>
          <div className={styles.colon2}></div>
        </div>
        <div className={styles.seconds}>
          <Digit digit={s.toString().split('').length > 1 ? +s.toString().split('')[0] : 0} />
          <Digit digit={s.toString().split('').length > 1 ? +s.toString().split('')[1] : s} />
        </div>
      </div>
    </>
  );
}

export default App;
