import React from "react";
import items from "./mock.json";
import Row, { GridCell } from "./Row";
import { FixedSizeList, VariableSizeGrid } from "react-window";
import VirtualizedListWithInfiniteScroll from "../InfiniteVirtualizedList/VirtualizedListWithInfiniteScroll";

const RowComponent = ({ index, style }) => (
  <Row image={items[index]} number={index} style={style} />
);

const getVariableWidthOrHeight = (index) => {
  return index % 2 === 0 ? 150 : 100;
};

export const FixedSizeListExample = () => {
  return (
    <FixedSizeList
      height={500}
      width={500}
      itemSize={150}
      itemCount={items.length}
    >
      {RowComponent}
    </FixedSizeList>
  );
};

export const VariableSizeGridExample = () => {
  return (
    <VariableSizeGrid
      columnCount={1000}
      rowCount={1000}
      height={600}
      width={600}
      columnWidth={getVariableWidthOrHeight}
      rowHeight={getVariableWidthOrHeight}
    >
      {GridCell}
    </VariableSizeGrid>
  );
};

export const List = () => {
  // return <FixedSizeListExample />;
  // return <VariableSizeGridExample />;
  return <VirtualizedListWithInfiniteScroll />;
};

export default List;
