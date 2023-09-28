import React from 'react';
import styles from './App.module.css';
import { FOODS } from './data/data.js';
import { useState } from 'react';

const Table = ({ data, currentPage, totalPages, onPageChange }) => {
  return (
    <div className={styles.container_for_table}>
        
      <div className={styles.pagination}>
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>#</th>
            <th>Food</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}$</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = FOODS.slice(startIndex, endIndex);

  return (
    <div className={styles.pagination_container}>
      <h1 className={styles.title}>Food Pagination Example</h1>
      <Table
        data={paginatedData}
        currentPage={currentPage}
        totalPages={Math.ceil(FOODS.length / ITEMS_PER_PAGE)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
