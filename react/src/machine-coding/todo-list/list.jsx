import styles from "./todo.module.scss";

function List({ items, handleEditClick, handleDeleteClick }) {
  return items.map((item, idx) => (
    <li className={styles.item} key={item.id}>
      <span>{item.value}</span>
      <div>
        <button
          className={styles.editBtn}
          onClick={() => handleEditClick(item)}
        >
          Edit
        </button>
        <button
          className={styles.deleteBtn}
          onClick={() => handleDeleteClick(idx)}
        >
          Delete
        </button>
      </div>
    </li>
  ));
}

export default List;
