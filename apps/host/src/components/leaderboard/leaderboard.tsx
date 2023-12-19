import { generateLeaderboardData } from '@/pages/leaderboard';
import leaderBoardStyles from './leaderboard.module.css';

export default function LeaderBoard() {
  const data = generateLeaderboardData();

  const GetLeaderBoardTableBody = () => {
    return Array.from(data.values()).map((contributor, index) => (
      <tr key={contributor.name}>
        <td
          className={
            index >= 1
              ? leaderBoardStyles.leaderBoardTableData
              : leaderBoardStyles.leaderBoardBorderBottomStyle
          }
        >
          {index}
        </td>
        <td
          className={
            index >= 1
              ? `${leaderBoardStyles.leaderBoardTableData} ${leaderBoardStyles.leaderBoardContributorNameTd}`
              : `${leaderBoardStyles.leaderBoardBorderBottomStyle} ${leaderBoardStyles.leaderBoardContributorNameTd}`
          }
        >
          <span>
            <img
              className={leaderBoardStyles.leaderBoardContributorImg}
              src={contributor.pic}
              alt={''}
            />
          </span>
          <span>{contributor.name}</span>
        </td>
        <td
          className={
            index >= 1
              ? leaderBoardStyles.leaderBoardTableData
              : leaderBoardStyles.leaderBoardBorderBottomStyle
          }
        >
          {contributor.challengesCompleted}
        </td>
      </tr>
    ));
  };
  return (
    <>
      <h2 id={'leader-board'} className={leaderBoardStyles.leaderBoardHeading}>Leader Board</h2>
      <table width={"100%"} border={1} cellSpacing={0} cellPadding={10} style={{textAlign:"center"}}>
        <thead>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Contributions</td>
          </tr>
        </thead>
        <tbody>{GetLeaderBoardTableBody()}</tbody>
      </table>
    </>
  );
}
