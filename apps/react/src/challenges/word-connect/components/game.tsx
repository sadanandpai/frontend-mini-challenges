import { useEffect, useRef, useState } from 'react';
import GridUI from './grid-ui';
import { ItemGroup, Status } from '../utils/types';
import styles from '../styles.module.scss';

interface Props {
  itemsGroup: ItemGroup;
  groupSize: number;
  columns: number;
  allItems: string[];
}

function Game({ itemsGroup, allItems, columns = 2, groupSize }: Props) {
  const [items, setItems] = useState<string[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [status, setStatus] = useState<Status | null>(null);
  const gridUIRef = useRef<{ clearSelection: () => void }>(null);

  useEffect(() => {
    setItems(allItems);
    setAttempts(0);
  }, [allItems, itemsGroup]);

  function isFromSingleGroup(selectedItems: string[]) {
    const group = itemsGroup.find((set) => set.has(selectedItems[0]));

    if (!group) {
      return false;
    }

    return selectedItems.every((item) => group.has(item));
  }

  function onSelection(selected: string[]) {
    if (selected.length === groupSize) {
      setAttempts(attempts + 1);
      const newStatus = isFromSingleGroup(selected) ? Status.Success : Status.Failure;
      setStatus(newStatus);
      const timeoutId = setTimeout(() => unHighlight(selected, newStatus), 1000);
      return () => clearTimeout(timeoutId);
    }
  }

  function unHighlight(itemsForRemoval: string[], status: 'success' | 'failure' | null) {
    if (status === 'success') {
      setItems(items.filter((item) => !itemsForRemoval.includes(item)));
    }
    setStatus(null);
    gridUIRef.current?.clearSelection();
  }

  return (
    <>
      {items.length ? (
        <GridUI
          items={items}
          cols={columns}
          onSelection={onSelection}
          status={status}
          ref={gridUIRef}
        />
      ) : (
        <p className={styles.center}>Well done. Reset to play again!</p>
      )}

      <p className={styles.center}>
        Attempts: <strong>{attempts}</strong>
      </p>
    </>
  );
}

export default Game;
