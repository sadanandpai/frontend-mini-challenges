import { logo } from '@fmc/assets/images';
import styles from './challenge-navbar.module.scss';

const { VITE_PATH, VITE_HOST_URL, DEV } = import.meta.env;
const backURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/#/react` : `/${VITE_PATH}/#/react/`;
const homeURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/` : `/${VITE_PATH}/`;

interface Props {
  title?: string;
}

function ChallengeNavbar({ title }: Props) {
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
        <a href="https://github.com/sadanandpai/frontend-mini-challenges/" target="blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github repo"
            className={styles.github}
          />
        </a>
      </div>
    </nav>
  );
}

export default ChallengeNavbar;
