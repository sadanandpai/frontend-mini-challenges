import { logo } from '@fmc/assets/images';
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>{' '}
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-external-link"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>{' '}
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
