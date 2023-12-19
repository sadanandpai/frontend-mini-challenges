import { contributors } from '@fmc/data/content';
import type { IChallenge, IContributor } from '@fmc/data/types';

interface LeaderboardEntry {
  name: string;
  pic: string;
  challengesCompleted: number;
}

export const generateLeaderboardData = (): Map<string, LeaderboardEntry> => {
  const leaderboardData: Map<string, LeaderboardEntry> = new Map();

  [].forEach((challenge: IChallenge) => {
    if (challenge.developer && contributors.has(challenge.developer)) {
      const developer = challenge.developer;
      const contributorInfo = contributors.get(developer) as IContributor;

      if (leaderboardData.has(developer)) {
        const currentDeveloper = leaderboardData.get(developer);
        if (currentDeveloper) {
          currentDeveloper.challengesCompleted += 1;
          leaderboardData.set(developer, currentDeveloper);
        }
      } else {
        leaderboardData.set(developer, {
          name: contributorInfo.name,
          pic: contributorInfo.pic,
          challengesCompleted: 1,
        });
      }
    }
  });

  const sortedLeaderboard = new Map(
    Array.from(leaderboardData.entries()).sort(
      (a, b) => b[1].challengesCompleted - a[1].challengesCompleted
    )
  );

  return new Map([...sortedLeaderboard.entries()].slice(0, 10));
};
