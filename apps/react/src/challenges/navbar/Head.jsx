import { useState } from 'react';
import { navData } from './data/data';
import styles from './style.module.css';

const Head = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className={styles.header}>
      <b>Your Logo</b>
      <nav className={openNav ? `${styles.active} ${styles.nav}` : `${styles.nav}`}>
        {navData.map((nav) => (
          <a key={nav.id} href="#">
            {nav.navPage}
          </a>
        ))}
      </nav>
      <span className={styles.hamburger} onClick={() => setOpenNav(!openNav)}>
        &#9776;
      </span>
    </header>
  );
};

export default Head;
