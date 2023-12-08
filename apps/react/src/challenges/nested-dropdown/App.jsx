import DropdownItems from './DropdownItems';
import { dropdownData } from './data/data';
import styles from './style.module.css';

const App = () => {
  return (
    <div className={styles.main}>
      <div className={styles.nestedDropdown}>
        <ul className={styles.dropdownMain}>
          {' '}
          {dropdownData.map((menu, index) => (
            <DropdownItems items={menu} key={index} depthLevel={0} />
          ))}{' '}
        </ul>
      </div>
    </div>
  );
};

export default App;
