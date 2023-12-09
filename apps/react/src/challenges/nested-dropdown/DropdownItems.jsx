import { useEffect, useState, useRef } from 'react';
import Dropdown from './Dropdown';
import styles from './style.module.css';

const DropdownItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);

    let ref = useRef();

    /** handle out side click */
    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);


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
