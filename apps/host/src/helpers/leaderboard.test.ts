import { EDifficulty, IChallenge } from '@fmc/data/types';
import { DeveloperContributions, updateContributions } from './leaderboard';

const devs = {
  DEV_1: 'dev_1',
  DEV_2: 'dev_2',
} as const;

const jsChallenges: Map<string, IChallenge> = new Map([
  [
    'counter',
    {
      title: 'Counter',
      link: 'counter/',
      difficulty: EDifficulty.Easy,
      developer: devs.DEV_1,
      tags: [],
    },
  ],
  [
    'bmi-calculator',
    {
      title: 'BMI Calculator',
      link: 'bmi-calculator/',
      difficulty: EDifficulty.Easy,
      developer: devs.DEV_2,
      tags: [],
    },
  ],
  [
    'star-rating',
    {
      title: 'Star Rating',
      link: 'star-rating/',
      difficulty: EDifficulty.Medium,
      developer: devs.DEV_1,
      tags: [],
    },
  ],
]);

describe('helpers: updateContributions', () => {
  let developerContributions: Map<string, DeveloperContributions>;
  const tech = 'js';
  beforeEach(() => {
    developerContributions = new Map();
  });

  it('should update the developer contributions map', () => {
    updateContributions(developerContributions, jsChallenges, tech);
    expect(developerContributions.size).toBe(2);
  });
  it('should update the total contributions', () => {
    updateContributions(developerContributions, jsChallenges, tech);
    const dev1Data = developerContributions.get(devs.DEV_1);
    expect(dev1Data?.totalContributions).toBe(2);
  });
  it('should update the contributions tech wise', () => {
    updateContributions(developerContributions, jsChallenges, tech);
    const dev1Data = developerContributions.get(devs.DEV_1);
    expect(dev1Data?.js).toBe(2);
  });
});
