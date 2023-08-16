import styles from './navbar.module.scss';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a className={styles.logo} href="/">
        <img src="/frontend-mini-challenges/react/dist/logo.png" alt="logo" height={40} width={40} />
        <span>Frontend Mini Challenges</span>
      </a>

      <div className={styles.challenges}>
        <a href="/frontend-mini-challenges/native/">JavaScript challenges</a>
        <a href="/frontend-mini-challenges/react/dist/#/challenges">React challenges</a>
      </div>

      <a href="https://github.com/sadanandpai/frontend-mini-challenges/">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github repo" className={styles.github} />
      </a>
    </nav>
  );
}

export default Navbar;
