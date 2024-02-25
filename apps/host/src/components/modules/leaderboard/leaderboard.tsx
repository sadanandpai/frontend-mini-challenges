import { generateLeaderboardData } from '@/helpers/generate-leaderboard';
import classes from './leaderboard.module.scss';
import assets from '@fmc/assets/images';

const techStackImgs = {
  js: assets.jsImg,
  react: assets.reactImg,
  vue: assets.vueImg,
  angular: assets.angularImg,
};

function cn(...classnames: string[]) {
  return classnames.join(' ');
}
const leaderboardData = generateLeaderboardData();

export default function Leaderboard() {
  const leaderBoardTableBody = Array.from(leaderboardData.values()).map((contributor, index) => (
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
          {['js', 'react', 'vue', 'angular'].map((techStack) => {
            const contributions = contributor.contributions[techStack];
            const img = techStackImgs[techStack];

            if (!contributions) {
              return null;
            }

            return (
              <div className={classes.techStackDiv} key={techStack}>
                <div className={classes.techStackDivWrapper}>
                  <img src={img} className={classes.techStackImg} />
                  <div>{contributions.length}</div>
                </div>
              </div>
            );
          })}

          <div className={classes.totalContributions}>
            <div>Total</div>
            <div>{contributor.numberOfContributions}</div>
          </div>
        </div>
      </td>
    </tr>
  ));

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
