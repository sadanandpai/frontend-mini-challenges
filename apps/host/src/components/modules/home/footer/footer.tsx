import { HashLink } from 'react-router-hash-link';
import { REPO_URL } from '@fmc/data/content';
import { githubSVG } from '@fmc/assets';
import styles from './footer.module.scss';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Frontend Mini Challenges</h4>
          <p>Sharpen your frontend development skills with our collection of mini challenges.</p>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
            aria-label="GitHub"
          >
            <img src={githubSVG} alt="GitHub" loading="lazy" width={24} height={24} />
            <span>GitHub</span>
          </a>
        </div>

        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <HashLink to="javascript">Challenges</HashLink>
            </li>
            <li>
              <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                Contribute
              </a>
            </li>
            <li>
              <a href={`${REPO_URL}/issues`} target="_blank" rel="noopener noreferrer">
                Report an Issue
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© {currentYear} Frontend Mini Challenges. All rights reserved.</p>
      </div>
    </footer>
  );
}
