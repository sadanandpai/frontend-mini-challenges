import { useState } from 'react';
import Dropdown from './Dropdown';
import styles from './style.module.css';

const DropdownItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li className={styles.dropdownItems} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {items.subItems ? (
        <>
          <button
            type="button"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}
            {depthLevel > 0 ? <span> &raquo;</span> : <span className={styles.arrow} />}
          </button>
          <Dropdown depthLevel={depthLevel + 1} subItems={items.subItems} dropdown={dropdown} />
        </>
      ) : (
        <a href="/#">{items.title}</a>
      )}
    </li>
  );
};

export default DropdownItems;
