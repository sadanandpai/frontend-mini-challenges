import React from "react";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import InfiniteLoaderRow from "./InfiniteLoaderRow";

const InfiniteLoaderList = ({
  items,
  loadMoreItems,
  hasNextPage,
}) => {
  const Row = ({ index, style }) => {
    return (
      <InfiniteLoaderRow
        image={items[index]}
        number={index}
        style={style}
        // Index of last item means next set of items are to be loaded.
        loading={index === items.length}
      />
    );
  };

  const itemCount = hasNextPage ? items.length + 1 : items.length;

  return (
    <InfiniteLoader
      // // Index less than last item means item is loaded.
      isItemLoaded={(index) => index < items.length}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <FixedSizeList
          height={500}
          width={500}
          itemSize={120}
          itemCount={itemCount}
          onItemsRendered={onItemsRendered}
          overscanCount={4}
          ref={ref}
        >
          {Row}
        </FixedSizeList>
      )}
    </InfiniteLoader>
  );
};

export default InfiniteLoaderList;
