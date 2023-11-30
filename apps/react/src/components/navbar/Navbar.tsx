import styles from './navbar.module.scss';

function Navbar({ children }: { children?: React.ReactNode }) {
  return (
    <nav className={styles.navbar}>
      <a className={styles.logo} href="/frontend-mini-challenges/">
        <img src="https://github.com/sadanandpai/frontend-mini-challenges/raw/main/shared/assets/logo.png" alt="logo" />
        <span>Frontend Mini Challenges</span>
      </a>

      <div className={styles.links}>{children}</div>

      <a href="https://github.com/sadanandpai/frontend-mini-challenges/" target="blank">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github repo" className={styles.github} />
      </a>
    </nav>
  );
}

export default Navbar;
