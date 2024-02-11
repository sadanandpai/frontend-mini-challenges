import { forwardRef, useImperativeHandle, useState } from 'react';
import styles from '../styles.module.scss';
import { Status } from '../utils/types';

interface Props {
  items: string[];
  cols: number;
  status: Status | null;
  onSelection: (selected: string[]) => void;
}

const GridUI = forwardRef(function GridUI({ items, cols, onSelection, status }: Props, ref) {
  const [selected, setSelected] = useState<string[]>([]);

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

  useImperativeHandle(ref, () => ({ clearSelection }));

  return (
    <section
      className={styles.grid}
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      data-status={status}
    >
      {items.map((item) => {
        const isSelected = selected.includes(item);
        return (
          <button
            key={item}
            onClick={() => markSelection(item)}
            className={`
            ${isSelected ? styles.highlight : ''} ${isSelected && status ? styles[status] : ''} 
          `}
          >
            {item}
          </button>
        );
      })}
    </section>
  );
});

export default GridUI;
