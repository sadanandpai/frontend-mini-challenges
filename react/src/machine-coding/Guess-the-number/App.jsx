import React, { useEffect, useState } from "react";

import styles from "./Guess.module.css";

export default function App() {
  const [l1, setL1] = useState();
  const [disable, setDisable] = useState(false);
  const [num, setNum] = useState(1);
  const [low, setLow] = useState(false);
  const [high, setHigh] = useState(false);
  const [hi, setHi] = useState(false);

  useEffect(() => {
    setL1(Math.round(100 * Math.random()));
  }, []);

  const check = (e) => {
    e.preventDefault();

    if (num < l1) {
      setLow(true);
      setHigh(false);
    } else if (num > l1) {
      setHigh(true);
      setLow(false);
    } else {
      setHi(true);
      setLow(false);
      setHigh(false);
      setDisable(true);
    }
  };

  const restart = () => {
    setL1(Math.round(100 * Math.random()));
    setHi(false);
    setLow(false);
    setHigh(false);
    setDisable(false);
    setNum(1);
  };

  return (
    <div className={styles.app}>
      <form onSubmit={check}>
        <label htmlFor="input">Guess a Number between 0 and 100</label>
        <input
          id="input"
          type="number"
          value={num}
          placeholder="Guess-Number"
          onChange={(e) => setNum(Number(e.target.value))}
        />
        <div className={styles.widget}>
          <button type="reset" onClick={() => restart()}>
            Reset
          </button>
          <button type="submit" onClick={(e) => check(e)} disabled={disable}>
            Check
          </button>
        </div>
      </form>
      <div className={styles.text}>
        {low && (
          <p>
            Your guess is <b>Less</b> than the actual number
          </p>
        )}
        {high && (
          <p>
            Your guess is <b>Higher</b> than the actual number
          </p>
        )}
        {hi && (
          <p>
            Your guess is <b>right</b>
          </p>
        )}
      </div>
    </div>
  );
}
