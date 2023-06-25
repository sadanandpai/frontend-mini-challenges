import ChallengeGrid from "./components/challenges/ChallengeGrid";
import styles from "./app.module.css";

function App() {
  return (
    <div className="container text-center">
      <h1>
        Frontend Mini Challenges&nbsp;
        <a href="https://github.com/sadanandpai/frontend-mini-challenges/">
          <img
            className={styles.logo}
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github repo"
          />
        </a>
      </h1>

      <h4>Challenges built using React</h4>

      <a href="/frontend-mini-challenges/">Switch to JavaScript version</a>

      <ChallengeGrid />
    </div>
  );
}

export default App;
