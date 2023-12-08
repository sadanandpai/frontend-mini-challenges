import styles from './style.module.css';
import { dropdownData } from './data/data';
import DropdownItems from './DropdownItems';

const App = () => {
  return (
    <div className={styles.main}>

      <div className={styles.nestedDropdown} >
        <ul className={styles.dropdownMain} > {
          dropdownData.map((menu, index) => {
            const depthLevel = 0;
            return <DropdownItems items={menu} key={index} depthLevel={depthLevel} />;
          })
        } </ul>

      </div>
    </div>
  );
};

export default App;
