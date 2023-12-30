import React from "react";
import "./Row.css";

const Row = ({ image, number, style }) => {
  return (
    <div style={style} className="list-item">
      <img src={image} alt="" />
      <div>Image #{number + 1}</div>
    </div>
  );
};

export const GridCell = ({ columnIndex, rowIndex, style }) => {
  return (
    <div
      style={style}
      className={
        columnIndex % 2
          ? rowIndex % 2 === 0
            ? "GridItemOdd"
            : "GridItemEven"
          : rowIndex % 2
          ? "GridItemOdd"
          : "GridItemEven"
      }
    >
      Item {rowIndex}, {columnIndex}
    </div>
  );
};

export default Row;
