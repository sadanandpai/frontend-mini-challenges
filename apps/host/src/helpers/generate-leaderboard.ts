import { contributors, angularChallenges, jsChallenges, reactChallenges, vueChallenges } from '@fmc/data/content';
import type { IChallenge } from '@fmc/data/types';

export interface DeveloperContributions {
  react?: IChallenge[];
  vue?: IChallenge[];
  js?: IChallenge[];
  angular?: IChallenge[];
  totalContributions: number;
}

export interface LeaderboardEntry {
  name: string;
  pic: string;
  contributions: DeveloperContributions;
  numberOfContributions: number;
  developer: string;
}

export const generateLeaderboardData = (): Map<string, LeaderboardEntry> => {
  const developerContributions: Map<string, DeveloperContributions> = new Map();

  // get contributions groupBy developer
  angularChallenges.forEach((val) => {
    if (val.developer) {
      if (developerContributions.has(val.developer)) {
        const developer = developerContributions.get(val.developer);
        if (developer) {
          val.longLink = `/angular/#/challenges/${val.link}`;
          developer.angular ? developer.angular.push(val) : developer.angular = [val];
          developer.totalContributions += 1;
        }
      } else {
        val.longLink = `/angular/#/challenges/${val.link}`;
        developerContributions.set(val.developer, {
          angular: [val],
          totalContributions: 1,
        });
      }
    }
  });
  reactChallenges.forEach((val) => {
    if (val.developer) {
      if (developerContributions.has(val.developer)) {
        const developer = developerContributions.get(val.developer);
        if (developer) {
          val.longLink = `/react/#/challenges/${val.link}`;
          developer.react ? developer.react.push(val) : developer.react = [val];
          developer.totalContributions += 1;
        }
      } else {
        val.longLink = `/react/#/challenges/${val.link}`;
        developerContributions.set(val.developer, {
          react: [val],
          totalContributions: 1,
        });
      }
    }
  });
  vueChallenges.forEach((val) => {
    if (val.developer) {
      if (developerContributions.has(val.developer)) {
        const developer = developerContributions.get(val.developer);
        if (developer) {
          val.longLink = `/vue/#/challenges/${val.link}`;
          developer.vue ? developer.vue.push(val) : developer.vue = [val];
          developer.totalContributions += 1;
        }
      } else {
        val.longLink = `/vue/#/challenges/${val.link}`;
        developerContributions.set(val.developer, {
          vue: [val],
          totalContributions: 1,
        });
      }
    }
  });
  jsChallenges.forEach(val => {
    if (val.developer) {
      if (developerContributions.has(val.developer)) {
        const developer = developerContributions.get(val.developer);
        if (developer) {
          val.longLink = `/js/#/challenges/${val.link}`;
          developer.js ? developer.js.push(val) : developer.js = [val];
          developer.totalContributions += 1;
        }
      } else {
        val.longLink = `/js/#/challenges/${val.link}`;
        developerContributions.set(val.developer, {
          js: [val],
          totalContributions: 1,
        });
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
        numberOfContributions: data.totalContributions,
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
