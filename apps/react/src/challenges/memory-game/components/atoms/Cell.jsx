import styles from './atoms.module.css';

export default function Cell({ rowIndex, colIndex, backgroundColor }) {
  return (
    <div
      className={`${styles.cellDiv} cell`}
      data-row-index={rowIndex}
      data-col-index={colIndex}
      style={{ backgroundColor: backgroundColor ?? '#FFF' }}
    />
  );
}
