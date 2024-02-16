import React, { useState } from 'react';
import Buttons from './Components/Buttons';
import styles from './TransferListApp.module.css';
import { countriesData } from './MockData/transferListData';
import ListContainer from './Components/ListContainer';

function getListState() {
  return countriesData.map((item) => ({
    ...item,
    selected: false,
    direction: 'left',
  }));
}

const TransferListApp = () => {
  const [items, setItems] = useState(getListState);
  const leftItems = items.filter((item) => item.direction === 'left');
  const rightItems = items.filter((item) => item.direction === 'right');
  const selectedLeftItems = leftItems.filter((item) => item.selected);
  const selectedRightItems = rightItems.filter((item) => item.selected);

  const onToggle = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          selected: !item.selected,
        };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const moveItems = (from, to) => {
    const movedItems = items.map((item) => {
      if (item.selected && item.direction === from) {
        return {
          ...item,
          selected: false,
          direction: to,
        };
      }
      return item;
    });
    setItems(movedItems);
  };

  const moveItemsTo = (to) => {
    const movedItems = items.map((item) => {
      return {
        ...item,
        direction: to,
      };
    });
    setItems(movedItems);
  };

  return (
    <div className={styles['TransferListContainer']}>
      <ListContainer items={leftItems} onToggle={onToggle} />
      <Buttons
        leftClickHandler={() => moveItems('left', 'right')}
        rightClickHandler={() => moveItems('right', 'left')}
        leftClickHandlerAll={() => moveItemsTo('right')}
        rightClickHandlerAll={() => moveItemsTo('left')}
        disableLeftBtn={selectedLeftItems.length === 0}
        disableRightBtn={selectedRightItems.length === 0}
        disableLeftBtnAll={leftItems.length === 0}
        disableRightBtnAll={rightItems.length === 0}
      />
      <ListContainer items={rightItems} onToggle={onToggle} />
    </div>
  );
};

export default TransferListApp;
