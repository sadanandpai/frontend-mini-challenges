/* eslint-disable react/prop-types */
import styles from './styles.module.css';

const Checkbox = (props) => {
  const { id, isChecked, label, onCheckBoxChange } = props;

  return (
    <label className={styles.nested_checkbox_label}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onCheckBoxChange(id, !isChecked)}
      />
      {label}
    </label>
  );
};

export default Checkbox;
