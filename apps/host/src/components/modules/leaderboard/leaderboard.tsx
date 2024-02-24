import { generateLeaderboardData } from '@/helpers/generate-leaderboard';
import classes from './leaderboard.module.scss';
import { ReactNode } from 'react';
import assets from '@fmc/assets/images';

function cn(...classnames: string[]) {
  return classnames.join(' ');
}

export default function Leaderboard() {
  const data = generateLeaderboardData();
  const ContributionDiv = ({ title, number }: { title: string | ReactNode; number: number }) => (
    <div className={classes.techStackDiv}>
      <div className={classes.techStackDivWrapper}>
        {title}
        <div>{number}</div>
      </div>
    </div>
  );

  const GetLeaderBoardTableBody = () => {
    return Array.from(data.values()).map((contributor, index) => (
      <tr key={contributor.name} className={classes.leaderboardRowContainer}>
        <td
          className={cn(
            index >= 1 ? classes.leaderBoardTableData : classes.leaderBoardBorderBottomStyle,
            classes.index
          )}
        >
          {index}
        </td>
        <td
          className={cn(
            index >= 1
              ? `${classes.leaderBoardTableData} ${classes.leaderBoardContributorNameTd}`
              : `${classes.leaderBoardBorderBottomStyle} ${classes.leaderBoardContributorNameTd}`,
            classes.name
          )}
        >
          {/* <Link to={`/profile/${contributor.developer}`} className={classes.profileLink}> */}
          <div className={classes.profileLink}>
            <img className={classes.leaderBoardContributorImg} src={contributor.pic} alt={''} />
            <span className={classes.leaderBoardContributorName}>{contributor.name}</span>
          </div>
        </td>
        <td
          className={cn(
            index >= 1 ? classes.leaderBoardTableData : classes.leaderBoardBorderBottomStyle,
            classes.contributions
          )}
        >
          <div className={classes.contributionTableCell}>
            {contributor.contributions.js ? (
              <ContributionDiv
                title={<img src={assets.jsImg} className={classes.techStackImg} />}
                number={contributor.contributions.js.length}
              />
            ) : null}
            {contributor.contributions.react ? (
              <ContributionDiv
                title={<img src={assets.reactImg} className={classes.techStackImg} />}
                number={contributor.contributions.react.length}
              />
            ) : null}
            {contributor.contributions.vue ? (
              <ContributionDiv
                title={<img src={assets.vueImg} className={classes.techStackImg} />}
                number={contributor.contributions.vue.length}
              />
            ) : null}
            {contributor.contributions.angular ? (
              <ContributionDiv
                title={<img src={assets.angularImg} className={classes.techStackImg} />}
                number={contributor.contributions.angular.length}
              />
            ) : null}
            <div className={classes.totalContributions}>
              <div>Total</div>
              <div>{contributor.numberOfContributions}</div>
            </div>
          </div>
        </td>
      </tr>
    ));
  };

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
          <tbody>{GetLeaderBoardTableBody()}</tbody>
        </table>
      </div>
    </div>
  );
}
