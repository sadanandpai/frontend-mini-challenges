import styles from "./header.module.css";

function Header({ heading = "Challenge" }: { heading?: string }) {
  return (
    <nav className={styles.nav}>
      <a href="/">Home</a>

      <h1>{heading[0].toUpperCase() + heading.slice(1)}</h1>

      <a href="https://github.com/sadanandpai/frontend-mini-challenges/">
        <img
          className={styles.logo}
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="github repo"
        />
      </a>
    </nav>
  );
}

export default Header;
