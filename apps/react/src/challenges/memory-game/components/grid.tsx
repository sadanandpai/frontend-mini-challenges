import styles from '../styles.module.css';

export function Grid({ rows, cols, width, children }) {
  const gridStyle = {
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    width: `${width - 20}px`,
    height: `${((width - 20) / cols) * rows}px`,
    maxHeight: `${rows * 100}px`,
    maxWidth: `${cols * 100}px`,
  };

  return (
    <div className={styles.grid} style={gridStyle}>
      {children}
    </div>
  );
}
