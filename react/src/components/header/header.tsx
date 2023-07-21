import { challenges } from '@/helpers/challenges';
import styles from './header.module.css';

function Header({ id }: { id: string }) {
  return (
    <nav className={styles.nav}>
      <a href="#/challenges">Home</a>

      <h1>{challenges.get(id)?.title}</h1>

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

// const getChallengeTitle = (challengeParam: string): string | undefined => {
//   const challenge = Array.from(challenges.values()).find((item) => item.link.includes(challengeParam));
//   return challenge?.title || 'Challenge';
// };
