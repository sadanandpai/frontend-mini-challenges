import {
  contributors,
  angularChallenges,
  cssChallenges,
  jsChallenges,
  reactChallenges,
  vueChallenges,
} from '@fmc/data/content';
import type { IChallenge } from '@fmc/data/types';

export interface DeveloperContributions {
  react?: number;
  vue?: number;
  js?: number;
  angular?: number;
  totalContributions: number;
}

export interface LeaderboardEntry {
  name: string;
  pic: string;
  contributions: DeveloperContributions;
  numberOfContributions: number;
  developer: string;
}

export function updateContributions(
  developerContributions: Map<string, DeveloperContributions>,
  challenges: Map<string, IChallenge>,
  tech: string
) {
  challenges.forEach((challenge) => {
    const devMapping = developerContributions.get(challenge.developer);
    if (devMapping) {
      devMapping[tech] = (devMapping[tech] ?? 0) + 1;
      devMapping.totalContributions += 1;
    } else {
      developerContributions.set(challenge.developer, {
        [tech]: 1,
        totalContributions: 1,
      });
    }
  });
}

export const generateLeaderboardData = (): Map<string, LeaderboardEntry> => {
  const developerContributions: Map<string, DeveloperContributions> = new Map();
  const techChallengesMap = new Map([
    ['css', cssChallenges],
    ['js', jsChallenges],
    ['react', reactChallenges],
    ['vue', vueChallenges],
    ['angular', angularChallenges],
  ]);

  techChallengesMap.forEach((challenges, tech) => {
    updateContributions(developerContributions, challenges, tech);
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
        numberOfContributions: data.totalContributions,
        developer: key,
      });
    }
  });

  // sort according to numberContributions
  const sortedLeaderboard = new Map(
    Array.from(leaderboardData.entries()).sort(
      (a, b) =>
        b[1].numberOfContributions - a[1].numberOfContributions ||
        a[1].name.localeCompare(b[1].name)
    )
  );

  return new Map([...sortedLeaderboard.entries()]);
};
