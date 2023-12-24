import { generateLeaderboardData } from '@/helpers/generate-leaderboard';
import classes from './leaderboard.module.css';

export default function Leaderboard() {
  const data = generateLeaderboardData();

  const GetLeaderBoardTableBody = () => {
    return Array.from(data.values()).map((contributor, index) => (
      <tr key={contributor.name}>
        <td
          className={
            index >= 1 ? classes.leaderBoardTableData : classes.leaderBoardBorderBottomStyle
          }
        >
          {index}
        </td>
        <td
          className={
            index >= 1
              ? `${classes.leaderBoardTableData} ${classes.leaderBoardContributorNameTd}`
              : `${classes.leaderBoardBorderBottomStyle} ${classes.leaderBoardContributorNameTd}`
          }
        >
          <span>
            <img className={classes.leaderBoardContributorImg} src={contributor.pic} alt={''} />
          </span>
          <span>{contributor.name}</span>
        </td>
        <td
          className={
            index >= 1 ? classes.leaderBoardTableData : classes.leaderBoardBorderBottomStyle
          }
        >
          {contributor.challengesCompleted}
        </td>
      </tr>
    ));
  };

  return (
    <div className="container">
      <h2 id="leader-board" className={classes.leaderBoardHeading}>
        Leaderboard
      </h2>
      <table
        width="100%"
        border={1}
        cellSpacing={0}
        cellPadding={10}
        style={{ textAlign: 'center' }}
      >
        <thead>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Contributions</td>
          </tr>
        </thead>
        <tbody>{GetLeaderBoardTableBody()}</tbody>
      </table>
    </div>
  );
}
