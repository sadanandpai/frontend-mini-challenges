import { forwardRef, MutableRefObject, useImperativeHandle, useState } from 'react';
import styles from '../advanced-counter.module.scss';

interface Props {
  delay: number;
  step: number;
  stepBy: (value: number) => void;
}

export const AsyncControls = forwardRef(function AsyncControls(
  { delay, step, stepBy }: Props,
  ref: MutableRefObject<{ reset: () => void }>
) {
  const [timerIds, setTimerIds] = useState<{
    decrement: NodeJS.Timeout | null;
    increment: NodeJS.Timeout | null;
  }>({
    decrement: null,
    increment: null,
  });

  function decrementAsync() {
    const stepValue = step;
    const timerId = setTimeout(() => {
      stepBy(-stepValue);
      setTimerIds((state) => ({ ...state, decrement: null }));
    }, delay * 1000);

    setTimerIds((state) => ({ ...state, decrement: timerId }));
  }

  function incrementAsync() {
    const stepValue = step;
    const timerId = setTimeout(() => {
      stepBy(+stepValue);
      setTimerIds((state) => ({ ...state, increment: null }));
    }, delay * 1000);

    setTimerIds((state) => ({ ...state, increment: timerId }));
  }

  useImperativeHandle(ref, () => ({
    reset: () => {
      timerIds.decrement && clearTimeout(timerIds.decrement);
      timerIds.increment && clearTimeout(timerIds.increment);
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
        disabled={!!timerIds.decrement}
        className={styles.asyncButton}
      >
        async -
      </button>

      <button
        onClick={incrementAsync}
        aria-label="Async Increment"
        disabled={!!timerIds.increment}
        className={styles.asyncButton}
      >
        + async
      </button>
    </section>
  );
});
