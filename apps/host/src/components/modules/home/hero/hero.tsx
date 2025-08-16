import { angularImg, cssImg, jsImg, reactImg, vueImg } from '@fmc/assets';

import { HashLink } from 'react-router-hash-link';
import { REPO_URL } from '@fmc/data/content';
import styles from './hero.module.scss';

const techStack = [
  { name: 'CSS', icon: cssImg },
  { name: 'JavaScript', icon: jsImg },
  { name: 'React', icon: reactImg },
  { name: 'Vue', icon: vueImg },
  { name: 'Angular', icon: angularImg },
];

export function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>Prepare for UI coding Interviews</h1>
      <p className={styles.heroDescription}>
        Sharpen your skills by solving real-world frontend challenges. Practice with multiple
        frameworks and learn from community solutions.
      </p>

      <div className={styles.heroCta}>
        <HashLink className={`${styles.button} ${styles.buttonPrimary}`} to="javascript">
          Explore Challenges
        </HashLink>

        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.button} ${styles.buttonSecondary}`}
        >
          Contribute
        </a>
      </div>

      <div className={styles.heroTechStack}>
        {techStack.map((tech) => (
          <img key={tech.name} src={tech.icon} alt={tech.name} title={tech.name} loading="lazy" />
        ))}
      </div>
    </section>
  );
}
