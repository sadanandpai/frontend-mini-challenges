import DropdownItems from './DropdownItems';
import styles from './style.module.css';

const Dropdown = ({
    subItems,
    dropdown,
    depthLevel
}) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? styles.dropdownSubItems : "";
    return (
        <ul className={`${styles.dropdown} ${dropdownClass} ${dropdown ? styles.show : ""}`}>
            {subItems.map((subItem, index) =>
            (<DropdownItems items={subItem} key={index} depthLevel={depthLevel} />
            ))
            }
        </ul>
    );
};

export default Dropdown;