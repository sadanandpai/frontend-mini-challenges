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

      <section>
        <button onClick={decrement} aria-label="Decrement">
          -
        </button>
        <button onClick={increment} aria-label="Increment">
          +
        </button>
      </section>

      <section>
        <label htmlFor="step">Increment/Decrement by</label>
        <input
          type="number"
          id="step"
          defaultValue={step.current}
          onChange={(e) => setStep((e.target as HTMLInputElement).valueAsNumber)}
          title="Step value"
        />
      </section>

      <section>
        <button onClick={reset}>Reset</button>
      </section>
    </main>
  );
}

export default Counter;
