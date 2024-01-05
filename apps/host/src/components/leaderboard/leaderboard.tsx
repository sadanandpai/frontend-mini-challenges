import { generateLeaderboardData } from '@/helpers/generate-leaderboard';
import classes from './leaderboard.module.css';
import { Link } from 'react-router-dom';

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
          <Link to={`/profile/${contributor.developer}`} className={classes.profileLink}>
          <span>
            <img className={classes.leaderBoardContributorImg} src={contributor.pic} alt={''} />
          </span>
          <span>{contributor.name}</span>
          </Link>
        </td>
        <td
          className={
            index >= 1 ? classes.leaderBoardTableData : classes.leaderBoardBorderBottomStyle
          }
        >
          {contributor.numberOfContributions}
        </td>
      </tr>
    ));
  };

  return (
    <div className="container">
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
