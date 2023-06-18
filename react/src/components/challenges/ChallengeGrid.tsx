import { challenges } from "@/helpers/challenges";
import styles from "./challenge-grid.module.scss";

function ChallengeGrid() {
  return (
    <div className={styles.challengeGrid}>
      {challenges.map((challenge) => (
        <div key={challenge.title}>
          <a
            href={challenge.link}
            className={`${challenge.link === "#" ? "disabled" : ""}`}
            title={challenge.link === "#" ? "To be developed" : ""}
          >
            {challenge.title}
          </a>
        </div>
      ))}
    </div>
  );
}

export default ChallengeGrid;
