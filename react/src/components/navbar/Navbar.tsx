import { HashLink } from 'react-router-hash-link';
import styles from './navbar.module.scss';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a className={styles.logo} href="/frontend-mini-challenges/">
        <img src="/frontend-mini-challenges/react/dist/logo.png" alt="logo" height={40} width={40} />
        <span>Frontend Mini Challenges</span>
      </a>

      <div className={styles.links}>
        <HashLink to="/#whyUs">Why us?</HashLink>
        <HashLink to="/#testimonials">Testimonials</HashLink>
        <HashLink to="/#contributors">Contributors</HashLink>
      </div>

      <a href="https://github.com/sadanandpai/frontend-mini-challenges/" target="blank">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github repo" className={styles.github} />
      </a>
    </nav>
  );
}

export default Navbar;
