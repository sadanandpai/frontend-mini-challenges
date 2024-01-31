import styles from '../TransferListApp.module.css';

const ListItem = ({ id, value, selected, onToggle }) => {
  return (
    <div className={styles['inputWrapper']}>
      <input
        type="checkbox"
        id={id}
        value={value}
        checked={selected}
        onChange={() => onToggle(id)}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};

export default ListItem;
