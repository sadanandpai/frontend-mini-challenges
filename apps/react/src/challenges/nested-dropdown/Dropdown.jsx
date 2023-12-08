import DropdownItems from './DropdownItems';
import styles from './style.module.css';

const Dropdown = ({ subItems, dropdown, depthLevel }) => {
  const dropdownClass = depthLevel > 1 ? styles.dropdownSubItems : '';

  return (
    <ul className={`${styles.dropdown} ${dropdownClass} ${dropdown ? styles.show : ''}`}>
      {subItems.map((subItem, index) => (
        <DropdownItems items={subItem} key={index} depthLevel={depthLevel + 1} />
      ))}
    </ul>
  );
};

export default Dropdown;
