import { MutableRefObject, useRef, useState } from 'react';
import { AsyncControls } from './components/async-controls';
import { SyncControls } from './components/sync-controls';
import { StepControl } from './components/step-control';
import { LimitControls } from './components/limit-controls';
import { DelayControl } from './components/delay-control';

import styles from './advanced-counter.module.scss';
import { maxLimit, minLimit } from './constants';

function AdvancedCounter() {
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(1);
  const [delay, setDelay] = useState(1);
  const [lowerLimit, setLowerLimit] = useState(minLimit);
  const [upperLimit, setUpperLimit] = useState(maxLimit);
  const ref = useRef<{ reset: () => void }>({ reset: () => {} });

  function reset() {
    ref.current.reset();
    setValue(0);
  }

  function stepBy(stepValue: number) {
    setValue((prev) => {
      const newValue = prev + stepValue;
      if (lowerLimit <= newValue && newValue <= upperLimit) {
        return newValue;
      }

      return prev;
    });
  }

  return (
    <main className={styles.main}>
      <h2>{value}</h2>

      <SyncControls stepBy={stepBy} step={step} />
      <AsyncControls
        delay={delay}
        stepBy={stepBy}
        step={step}
        ref={ref as MutableRefObject<{ reset: () => void }>}
      />
      <DelayControl delay={delay} setDelay={setDelay} />

      <section>
        <StepControl step={step} setStep={setStep} />

        <LimitControls
          value={value}
          lowerLimit={lowerLimit}
          upperLimit={upperLimit}
          setLowerLimit={setLowerLimit}
          setUpperLimit={setUpperLimit}
        />

        <button onClick={reset}>Reset</button>
      </section>
    </main>
  );
}

export default AdvancedCounter;
