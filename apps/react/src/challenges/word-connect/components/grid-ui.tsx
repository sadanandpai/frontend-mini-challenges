import { forwardRef, useImperativeHandle, useState } from 'react';
import styles from '../styles.module.scss';
import { Status } from '../utils/types';

interface Props {
  items: string[];
  cols: number;
  status: Status;
  onSelection: (selected: string[]) => void;
}

const GridUI = forwardRef(function GridUI({ items, cols, onSelection, status }: Props, ref) {
  const [selected, setSelected] = useState<string[]>([]);

  // mark the selection and inform the parent
  const markSelection = (item: string) => {
    if (status) {
      return;
    }

    let newSelected: string[] = [];
    if (selected.includes(item)) {
      newSelected = selected.filter((i) => i !== item);
    } else {
      newSelected = [...selected, item];
    }

    setSelected(newSelected);
    onSelection(newSelected);
  };

  function clearSelection() {
    setSelected([]);
  }

  // expose clearSelection method to the parent
  useImperativeHandle(ref, () => ({ clearSelection }));

  return (
    <section
      data-status={status}
      className={styles.grid}
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {items.map((item) => {
        const isSelected = selected.includes(item);
        const className = `${styles.itemBtn} ${isSelected ? styles.highlight : ''} ${
          isSelected && status ? styles[status] : ''
        }`;
        return (
          <button key={item} className={className} onClick={() => markSelection(item)}>
            {item}
          </button>
        );
      })}
    </section>
  );
});

export default GridUI;
