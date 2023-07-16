import React, { useState, useRef, useCallback } from 'react'
import useBookSearch from './useBookSearch'
import styles from './index.module.css'
export default function App() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const {
    books,
    hasMore,
    loading,
    error
  } = useBookSearch(query, pageNumber)

  const observer = useRef()
  const lastBookElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  return (
    <>
      <input type="text" value={query} onChange={handleSearch}></input>
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return <div className={`${styles['book-title']} ${index%2 ? styles.odd :styles.even}`} ref={lastBookElementRef} key={book}>{book}</div>
        } else {
          return <div className={`${styles['book-title']} ${index%2 ? styles.odd :styles.even}`} key={book}>{book}</div>
        }
      })}
      {loading && query!==''&& <div className={styles.loader}></div>}
      <div>{error && 'Error'}</div>
    </>
  )
}