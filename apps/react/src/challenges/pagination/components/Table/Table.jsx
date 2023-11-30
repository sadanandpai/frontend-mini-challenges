import Pagination from '../Pagination/Pagination';
import styles from './Table.module.css';

export const Table = ({ data, currentPage, totalPages, onPageChange }) => {
  return (
    <div className={styles.container_for_table}>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />

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
