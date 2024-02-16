import React from 'react';
import styles from '../TransferListApp.module.css';

const Buttons = ({
  leftClickHandler,
  rightClickHandler,
  leftClickHandlerAll,
  rightClickHandlerAll,
  disableLeftBtn,
  disableRightBtn,
  disableLeftBtnAll,
  disableRightBtnAll,
}) => {
  return (
    <div className={styles['buttons-container']}>
      <button onClick={leftClickHandlerAll} disabled={disableLeftBtnAll}>
        {'>>'}
      </button>
      <button onClick={leftClickHandler} disabled={disableLeftBtn}>
        {'>'}
      </button>
      <button onClick={rightClickHandler} disabled={disableRightBtn}>
        {'<'}
      </button>
      <button onClick={rightClickHandlerAll} disabled={disableRightBtnAll}>
        {'<<'}
      </button>
    </div>
  );
};

export default Buttons;
