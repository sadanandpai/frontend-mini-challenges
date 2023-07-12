import styles from "./header.module.css";
import { challenges } from "@/helpers/challenges";

function Header({ heading = "Challenge" }: { heading?: string }) {
  return (
    <nav className={styles.nav}>
      <a href="#/">Home</a>

      <h1>{getChallengeTitle(heading)}</h1>

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

const getChallengeTitle = (challengeParam: string): string | undefined => {
  const challenge = challenges.find((item) => item.link.includes(challengeParam));
  return challenge?.title||'Challenge';
};
