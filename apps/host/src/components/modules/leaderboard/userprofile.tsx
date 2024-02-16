import { useParams } from 'react-router-dom';

import classes from './leaderboard.module.scss';
import { LeaderboardEntry, generateLeaderboardData } from '@/helpers/generate-leaderboard';
import { IChallenge } from '../../../../../../shared/data/types/challenge';

const ChallengesContainer = ({ challenges }: { challenges: IChallenge[] }) => (
  <div className={'challengesCOntainer'}>
    <h2>List of Contributions</h2>
    <ul>
      {challenges?.map((challenge) => (
        <a href={challenge.longLink} key={challenge.longLink}>
          {' '}
          <li>{challenge.title}</li>
        </a>
      ))}
    </ul>
  </div>
);
const ProfileContainer = ({ userProfileDetails }: { userProfileDetails: LeaderboardEntry }) => (
  <div className={classes.profileDetailsContainer}>
    <div className={classes.profileDetailsContainerLeft}>
      <img src={userProfileDetails.pic} className={classes.userProfileImg} alt={'contributor'} />
    </div>
    <div className={classes.profileDetailsContainerRight}>
      <h3>
        Name : <span className={classes.fontWeightNormal}>{userProfileDetails.name}</span>
      </h3>
      <h3>
        Github Id : <span className={classes.fontWeightNormal}>{userProfileDetails.developer}</span>
      </h3>
      <h3>
        Total Contributions :{' '}
        <span className={classes.fontWeightNormal}>{userProfileDetails.numberOfContributions}</span>
      </h3>
    </div>
  </div>
);
export const UserProfile = () => {
  const { githubid } = useParams();
  const userProfileDetails: LeaderboardEntry = generateLeaderboardData().get(
    githubid as string
  ) as LeaderboardEntry;
  const challenges: IChallenge[] = [];
  userProfileDetails.contributions.angular &&
    challenges.push(...userProfileDetails.contributions.angular);
  userProfileDetails.contributions.react &&
    challenges.push(...userProfileDetails.contributions.react);
  userProfileDetails.contributions.vue && challenges.push(...userProfileDetails.contributions.vue);
  userProfileDetails.contributions.js && challenges.push(...userProfileDetails.contributions.js);
  return (
    userProfileDetails && (
      <div className="container">
        <h2 id="user-profile" className={classes.userProfileHeading}>
          User Profile
        </h2>
        <ProfileContainer userProfileDetails={userProfileDetails} />
        <ChallengesContainer challenges={challenges} />
      </div>
    )
  );
};
