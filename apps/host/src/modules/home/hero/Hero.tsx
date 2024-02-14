import styles from './hero.module.scss';
import { HashLink } from 'react-router-hash-link';

function Hero() {
  return (
    <main className={styles.hero}>
      <div>
        <h1>
          Prepare for <span>UI coding interviews</span>
        </h1>

        <p>by solving the collection of challenges from Frontend Mini Challenges</p>

        <h3 className={styles.link}>
          <HashLink to="javascript">JS Mini Challenges</HashLink>
        </h3>

        <h3 className={styles.link}>
          <HashLink to="react">React Mini Challenges</HashLink>
        </h3>

        <h3 className={styles.link}>
          <HashLink to="vue">Vue Mini Challenges</HashLink>
        </h3>
      </div>

      <figure className={styles.figure}>
        <img
          className={styles.heroImage}
          src="https://github.com/sadanandpai/frontend-mini-challenges/raw/main/shared/assets/cover-transparent.png"
          alt="brand"
        />
        <figcaption>Collection of frontend challenges for learning and interviews</figcaption>
      </figure>
    </main>
  );
}

export default Hero;
