import { contributors, angularChallenges, jsChallenges, reactChallenges, vueChallenges } from '@fmc/data/content';
import type { IChallenge } from '@fmc/data/types';

export interface LeaderboardEntry {
  name: string;
  pic: string;
  contributions: IChallenge[];
  numberOfContributions: number;
  developer: string;
}

export const generateLeaderboardData = (): Map<string, LeaderboardEntry> => {
  const developerContributions: Map<string, IChallenge[]> = new Map();

  // get contributions groupBy deeloper
  angularChallenges.forEach((val) => {
    if (val.developer) {
      if (developerContributions.has(val.developer)) {
        const developer = developerContributions.get(val.developer);
        val.longLink = `/angular/#/challenges/${val.link}`;
        developer?.push(val);
      } else {
        val.longLink = `/angular/#/challenges/${val.link}`;
        developerContributions.set(val.developer, [val]);
      }
    }
  });
  reactChallenges.forEach((val) => {
    if (val.developer) {
      if (developerContributions.has(val.developer)) {
        const developer = developerContributions.get(val.developer);
        val.longLink = `/frontend-mini-challenges/react/#/${val.link}`;
        developer?.push(val);
      } else {
        val.longLink = `/frontend-mini-challenges/react/#/${val.link}`;
        developerContributions.set(val.developer, [val]);
      }
    }
  });
  vueChallenges.forEach((val) => {
    if (val.developer) {
      if (developerContributions.has(val.developer)) {
        const developer = developerContributions.get(val.developer);
        val.longLink = `/vue/#${val.link}`;
        developer?.push(val);
      } else {
        val.longLink = `/vue/#${val.link}`;
        developerContributions.set(val.developer, [val]);
      }
    }
  });
  jsChallenges.forEach(val => {

    if (val.developer) {
      if (developerContributions.has(val.developer)) {
        const developer = developerContributions.get(val.developer);
        val.longLink = `/frontend-mini-challenges/javascript/src/challenges/${val.link}/`;
        developer?.push(val);
      } else {
        val.longLink = `/frontend-mini-challenges/javascript/src/challenges/${val.link}/`;
        developerContributions.set(val.developer, [val]);
      }
    }
  });

  // get developerInfo from contributions
  const leaderboardData: Map<string, LeaderboardEntry> = new Map();
  developerContributions.forEach((data, key) => {
    const developerInfo = contributors.get(key);
    if (developerInfo) {
      leaderboardData.set(key, {
        name: developerInfo?.name,
        pic: developerInfo?.pic,
        contributions: data,
        numberOfContributions: data.length,
        developer: key,
      });
    }
  });

  // sort according to numberContributions
  const sortedLeaderboard = new Map(
    Array.from(leaderboardData.entries()).sort(
      (a, b) => b[1].numberOfContributions - a[1].numberOfContributions || a[1].name.localeCompare(b[1].name)
    )
  );

  return new Map([...sortedLeaderboard.entries()]);
};
