import { leaderBoardTableBody } from './leaderboard-body';
import classes from './leaderboard.module.scss';

export default function Leaderboard() {
  return (
    <div className="container">
      <div className={classes.leaderboardTableWrapper}>
        <table
          border={1}
          cellSpacing={0}
          cellPadding={10}
          style={{ textAlign: 'center' }}
          className={classes.leaderboardTable}
        >
          <thead>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Contributions</td>
            </tr>
          </thead>
          <tbody>{leaderBoardTableBody}</tbody>
        </table>
      </div>
    </div>
  );
}
