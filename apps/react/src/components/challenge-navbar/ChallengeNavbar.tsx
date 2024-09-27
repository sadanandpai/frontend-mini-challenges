import { logo } from '@fmc/assets/images';
import { ExternalLink } from 'lucide-react';
import styles from './challenge-navbar.module.scss';

const { VITE_PATH, VITE_HOST_URL, DEV } = import.meta.env;
const backURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/#/react` : `/${VITE_PATH}/#/react/`;
const homeURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/` : `/${VITE_PATH}/`;

interface Props {
  link?: string;
  title?: string;
}

const reactSourceCodeBaseURL =
  'https://github.com/sadanandpai/frontend-mini-challenges/tree/main/apps/react/src/challenges/';

function ChallengeNavbar({ title, link }: Props) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <a href={backURL} className={styles.back}>
          &lt;
        </a>
        <a className={styles.logo} href={homeURL}>
          <img src={logo} alt="logo" />
        </a>
      </div>

      <h1>{title}</h1>

      <div className={styles.right}>
        <div className={styles.source_code}>
          {link ? (
            <a href={reactSourceCodeBaseURL + link} target="_blank" rel="noreferrer">
              <ExternalLink />
              Source code
            </a>
          ) : null}
        </div>
        <a href="https://github.com/sadanandpai/frontend-mini-challenges/" target="blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github repo"
            className={styles.github}
          />
        </a>
        <div className={styles.responsive_nav}>
          <div className={styles.hamburger}>
            <input type="checkbox" />
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <section className={styles.menu}>
              <ul>
                {link ? (
                  <a href={reactSourceCodeBaseURL + link} target="blank">
                    <li>
                      <ExternalLink />
                      Source code
                    </li>
                  </a>
                ) : null}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ChallengeNavbar;
