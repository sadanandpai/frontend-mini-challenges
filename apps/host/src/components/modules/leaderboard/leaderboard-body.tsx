import { generateLeaderboardData } from '@/helpers/leaderboard';
import classes from './leaderboard.module.scss';
import assets from '@fmc/assets/images';

function cn(...classnames: string[]) {
  return classnames.join(' ');
}

const techStackImgs = new Map([
  ['js', assets.jsImg],
  ['react', assets.reactImg],
  ['vue', assets.vueImg],
  ['angular', assets.angularImg],
]);

const leaderboardData = generateLeaderboardData();

export const leaderBoardTableBody = Array.from(leaderboardData.values()).map(
  (contributor, index) => (
    <tr key={contributor.name} className={classes.leaderboardRowContainer}>
      <td className={cn(classes.leaderBoardTableData, classes.index)}>{index}</td>
      <td
        className={cn(
          classes.leaderBoardTableData,
          classes.leaderBoardContributorNameTd,
          classes.name
        )}
      >
        <div className={classes.profileLink}>
          <img className={classes.leaderBoardContributorImg} src={contributor.pic} alt={''} />
          <span className={classes.leaderBoardContributorName}>{contributor.name}</span>
        </div>
      </td>
      <td className={cn(classes.leaderBoardTableData, classes.contributions)}>
        <div className={classes.contributionTableCell}>
          {[...techStackImgs.entries()].map(([techStack, img]) => {
            const contributions = contributor.contributions[techStack];

            if (!contributions) {
              return null;
            }

            return (
              <div className={classes.techStackDiv} key={techStack}>
                <div className={classes.techStackDivWrapper}>
                  <img src={img} className={classes.techStackImg} />
                  <div>{contributions}</div>
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
  )
);
