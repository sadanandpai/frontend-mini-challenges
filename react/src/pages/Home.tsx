import styles from './styles.module.scss';

function Home() {
  return (
    <div className="container text-center">
      <h1 className={styles.h1}>
        Frontend Mini Challenges
        <a href="https://github.com/sadanandpai/frontend-mini-challenges/">
          <img
            className={styles.github}
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github repo"
          />
        </a>
      </h1>
      <h3>Collection of frontend challenges for learning and interviews</h3>

      <img
        className={styles.hero}
        src="https://github.com/sadanandpai/frontend-mini-challenges/raw/main/cover.png"
        loading="lazy"
        alt="brand"
      />

      <div className={styles.routes}>
        <a href="https://sadanandpai.github.io/frontend-mini-challenges/native/">
          View challenges in
          <br />
          JavaScript
        </a>
        <a href="https://sadanandpai.github.io/frontend-mini-challenges/react/dist/">
          View challenges in
          <br />
          React
        </a>
      </div>
    </div>
  );
}

export default Home;
