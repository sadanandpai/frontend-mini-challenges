import { RefObject, forwardRef, useImperativeHandle, useState } from 'react';

import styles from '../advanced-counter.module.scss';

interface Props {
  delay: number;
  step: number;
  stepBy: (value: number) => void;
}

export const AsyncControls = forwardRef(function AsyncControls(
  { delay, step, stepBy }: Props,
  ref: RefObject<{ reset: () => void }>
) {
  const [timerIds, setTimerIds] = useState<{
    decrement: NodeJS.Timeout | null;
    increment: NodeJS.Timeout | null;
  }>({
    decrement: null,
    increment: null,
  });
  const [disabled, setDisabled] = useState<boolean>(false);
  function decrementAsync() {
    const stepValue = step;
    setDisabled(true);
    const timerId = setTimeout(() => {
      stepBy(-stepValue);
      setTimerIds((state) => ({ ...state, decrement: null }));
      setDisabled(false);
    }, delay * 1000);

    setTimerIds((state) => ({ ...state, decrement: timerId }));
  }

  function incrementAsync() {
    const stepValue = step;
    setDisabled(true);
    const timerId = setTimeout(() => {
      stepBy(+stepValue);
      setTimerIds((state) => ({ ...state, increment: null }));
      setDisabled(false);
    }, delay * 1000);

    setTimerIds((state) => ({ ...state, increment: timerId }));
  }

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (timerIds.decrement) {
        clearTimeout(timerIds.decrement);
      }

      if (timerIds.increment) {
        clearTimeout(timerIds.increment);
      }

      setTimerIds({
        decrement: null,
        increment: null,
      });
    },
  }));

  return (
    <section className={styles.async}>
      <button
        onClick={decrementAsync}
        aria-label="Async Decrement"
        disabled={!!timerIds.decrement || disabled}
        className={styles.asyncButton}
      >
        async -
      </button>

      <button
        onClick={incrementAsync}
        aria-label="Async Increment"
        disabled={!!timerIds.increment || disabled}
        className={styles.asyncButton}
      >
        + async
      </button>
    </section>
  );
});
