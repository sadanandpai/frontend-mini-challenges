import { generateLeaderboardData } from '@/helpers/generate-leaderboard';
import classes from './leaderboard.module.scss';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import assets from '@fmc/assets/images';

export default function Leaderboard() {
  const data = generateLeaderboardData();
  const ContributionDiv = ({title, number}: { title: string | ReactNode; number: number}) => (
    <div className="">
      {title}
      <div>{number}</div>
    </div>
  )

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
          <div className={classes.contributionTableCell}>
            {contributor.contributions.js ? <ContributionDiv title={<img src={assets.jsImg} width={30} height={30} />} number={contributor.contributions.js.length} /> : null}
            {contributor.contributions.react ? <ContributionDiv title={<img src={assets.reactImg} width={30} height={30} />} number={contributor.contributions.react.length} /> : null}
            {contributor.contributions.vue ? <ContributionDiv title={<img src={assets.vueImg} width={30} height={30} />} number={contributor.contributions.vue.length} /> : null}
            {contributor.contributions.angular ? <ContributionDiv title={<img src={assets.angularImg} width={30} height={30} />} number={contributor.contributions.angular.length} /> : null}
            <div><div>Total</div><div>{contributor.numberOfContributions}</div></div>
          </div>
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
