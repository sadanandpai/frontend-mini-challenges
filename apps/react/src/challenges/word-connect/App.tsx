import { getConnectedGroups } from './utils/helpers';
import { useCallback, useEffect, useState } from 'react';
import Game from './components/game';
import { ItemGroup } from './utils/types';
import { Leva, useControls } from 'leva';
import styles from './styles.module.scss';

const isSmallScreen = window.innerWidth <= 768;

const App = () => {
  const { groupSize } = useControls({ groupSize: { value: 2, min: 2, max: 4, step: 1 } });
  const { itemCount } = useControls({ itemCount: { value: 8, min: 4, max: 12, step: 1 } });
  const { columns } = useControls({
    columns: { value: 4, min: 2, max: 4, step: 1, disabled: isSmallScreen },
  });

  const [itemsGroup, setItemsGroup] = useState<ItemGroup>([]);
  const [allItems, setAllItems] = useState<string[]>([]);

  const reset = useCallback(() => {
    const [newItemsGroup, newAllItems] = getConnectedGroups(itemCount, groupSize);
    setItemsGroup(newItemsGroup);
    setAllItems(newAllItems);
  }, [setAllItems, itemCount, groupSize]);

  useEffect(reset, [itemCount, groupSize, reset]);

  return (
    <>
      <Leva
        collapsed
        hideCopyButton={true}
        titleBar={{ position: { x: 0, y: 40 }, filter: false, title: 'Config' }}
        theme={{
          colors: {
            highlight1: 'white',
            highlight2: 'white',
          },
        }}
      />

      <h3 className={styles.center}>
        Connect group of {groupSize} words by clicking on related words
      </h3>
      <Game itemsGroup={itemsGroup} allItems={allItems} columns={columns} groupSize={groupSize} />
      <div className={styles.center}>
        <button className={styles.reset} onClick={() => reset()}>
          Reset
        </button>
      </div>
    </>
  );
};

export default App;
