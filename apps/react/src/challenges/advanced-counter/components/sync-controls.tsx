import styles from '../advanced-counter.module.scss';

interface Props {
  stepBy: (value: number) => void;
  step: number;
}

export function SyncControls({ stepBy, step }: Props) {
  return (
    <section className={styles.async}>
      <button onClick={() => stepBy(-step)} aria-label="Decrement">
        -
      </button>
      <button onClick={() => stepBy(step)} aria-label="Increment">
        +
      </button>
    </section>
  );
}
