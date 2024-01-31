import React from "react";
import styles from '../../TransferListApp.module.css';

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
    <div className={styles["buttons-container"]}>
      <button
        onClick={() => leftClickHandlerAll()}
        disabled={disableLeftBtnAll}
        className={disableLeftBtnAll ? styles["disabled-button"] : ""}
      >
        {">>"}
      </button>
      <button
        onClick={() => leftClickHandler()}
        disabled={disableLeftBtn}
        className={disableLeftBtn ? styles["disabled-button"] : ""}
      >
        {">"}
      </button>
      <button
        onClick={() => rightClickHandler()}
        disabled={disableRightBtn}
        className={disableRightBtn ? styles["disabled-button"] : ""}
      >
        {"<"}
      </button>
      <button
        onClick={() => rightClickHandlerAll()}
        disabled={disableRightBtnAll}
        className={disableRightBtnAll ? styles["disabled-button"] : ""}
      >
        {"<<"}
      </button>
    </div>
  );
};

export default Buttons;
