import React, { useState } from "react";
import InfiniteLoaderList from "./InfiniteLoaderList";

const VirtualizedListWithInfiniteScroll = () => {
  const [items, setItems] = useState([]);

  const loadMoreItems = () => {

    return fetch("https://dog.ceo/api/breeds/image/random/10")
      .then((res) => res.json())
      .then(({ message: newItems }) => {
        setItems((prevItems) => [...prevItems, ...newItems]);
      })
      .catch((err) => console.error(err))
  };

  return (
    <InfiniteLoaderList
      items={items}
      loadMoreItems={loadMoreItems}
      hasNextPage
    />
  );
};

export default VirtualizedListWithInfiniteScroll;
