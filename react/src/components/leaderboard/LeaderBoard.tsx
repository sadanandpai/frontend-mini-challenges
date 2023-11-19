import { LeaderBoardTable } from './LeaderBoardTable';
import styles from './leaderboard.module.scss'


function LeaderBoard() {
  return (
    <section>
      <h2 id="testimonials" className={styles.heading}>
        Leader board
      </h2>
      <LeaderBoardTable />

    </section>
  );
}

export default LeaderBoard;