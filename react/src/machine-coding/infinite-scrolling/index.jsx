import React, { useCallback, useRef, useState } from 'react';

import styles from './index.module.css';
import useSearch from './useSearch';

export default function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const { items, hasMore, loading, error } = useSearch(pageNumber);
  const observer = useRef();

  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore]
  );

  return (
    <>
      {items?.map((item, index) => {
        if (items.length === index + 1) {
          return (
            <div className={`${styles['book-title']}`} ref={lastBookElementRef} key={item}>
              {item}
            </div>
          );
        } else {
          return (
            <div className={`${styles['book-title']}`} key={item}>
              {item}
            </div>
          );
        }
      })}

      {loading && <div className={styles.loader}></div>}
      <div>{error && 'Error'}</div>
    </>
  );
}
