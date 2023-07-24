import styles from "./todo.module.scss";

function List({ items, handleEditClick, handleDeleteClick, handleCompleteClick }) {
  return items.map((item, idx) => (
    <li className={styles.item} key={item.id} title="Double click to mark completed" onDoubleClick={() => handleCompleteClick(item)}>
      <span className={item.isDone ? styles.completed: ""}>{item.value}</span>
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
