import React from "react";

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
    <div className="buttons-container">
      <button
        onClick={() => leftClickHandlerAll()}
        disabled={disableLeftBtnAll}
        style={{ pointerEvents: disableLeftBtnAll ? "none" : "" }}
      >
        {">>"}
      </button>
      <button
        onClick={() => leftClickHandler()}
        disabled={disableLeftBtn}
        style={{ pointerEvents: disableLeftBtn ? "none" : "" }}
      >
        {">"}
      </button>
      <button
        onClick={() => rightClickHandler()}
        disabled={disableRightBtn}
        style={{ pointerEvents: disableRightBtn ? "none" : "" }}
      >
        {"<"}
      </button>
      <button
        onClick={() => rightClickHandlerAll()}
        disabled={disableRightBtnAll}
        style={{ pointerEvents: disableRightBtnAll ? "none" : "" }}
      >
        {"<<"}
      </button>
    </div>
  );
};

export default Buttons;
