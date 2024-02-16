import { useEffect, useRef, useState } from 'react';
import GridUI from './grid-ui';
import { ItemGroup, Status, StatusOptions } from '../utils/types';
import styles from '../styles.module.scss';
import { areItemsFromSingleGroup } from '../utils/helpers';

interface Props {
  itemGroups: ItemGroup[];
  groupSize: number;
  columns: number;
  allItems: string[];
}

function Game({ itemGroups, allItems, columns = 2, groupSize }: Props) {
  const [items, setItems] = useState<string[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [status, setStatus] = useState<Status>(null);
  const gridUIRef = useRef<{ clearSelection: () => void }>(null);

  // when items change, reset the game
  useEffect(() => {
    setItems(allItems);
    setAttempts(0);
    setStatus(null);
    gridUIRef.current?.clearSelection();
  }, [allItems]);

  // tak action if items are from the same group on selection completion
  function onSelection(selected: string[]) {
    if (selected.length === groupSize) {
      // if the selection is complete
      setAttempts(attempts + 1);
      const newStatus = areItemsFromSingleGroup(itemGroups, selected)
        ? StatusOptions.Success
        : StatusOptions.Failure;
      setStatus(newStatus);
      const timeoutId = setTimeout(() => unHighlight(selected, newStatus), 1000);
      return () => clearTimeout(timeoutId);
    }
  }

  function unHighlight(itemsForRemoval: string[], status: Status) {
    // remove the items if the selection was successful
    if (status === StatusOptions.Success) {
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
