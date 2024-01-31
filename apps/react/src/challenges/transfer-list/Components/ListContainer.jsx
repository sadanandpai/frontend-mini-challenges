import React from 'react';
import styles from '../TransferListApp.module.css';
import ListItem from './ListItem';

const ListContainer = ({ items, onToggle }) => {
  return (
    <div className={styles['list-container']}>
      <div className={styles['list-items']}>
        {items.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            value={item.value}
            selected={item.selected}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default ListContainer;
