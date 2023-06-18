import { useRef, useState } from "react";

import styles from "./counter.module.scss";

function Counter() {
  const [value, setValue] = useState(0);
  const step = useRef(1);

  const setStep = (value: number) => {
    step.current = value;
  };

  const increment = () => {
    setValue((state) => state + step.current);
  };

  const decrement = () => {
    setValue((state) => state - step.current);
  };

  const reset = () => {
    setValue(0);
  };

  return (
    <main className={styles.main}>
      <h2>{value}</h2>

      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>

      <div>
        <label htmlFor="step">Icrement/Decrement by</label>
        <input
          type="number"
          id="step"
          defaultValue={step.current}
          onChange={(e) =>
            setStep((e.target as HTMLInputElement).valueAsNumber)
          }
        />
      </div>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </main>
  );
}

export default Counter;
