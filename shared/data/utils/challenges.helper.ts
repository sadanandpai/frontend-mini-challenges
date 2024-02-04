import { EDifficulty, IChallenge } from '../types';

const difficultyOrder = [EDifficulty.Easy, EDifficulty.Medium, EDifficulty.Hard];

export function getSortedChallengesByDifficulty(challenges: Map<string, IChallenge>) {
  const sortedChallengesByDifficulty = [...challenges.values()];
  sortedChallengesByDifficulty.sort((a, b) => {
    const difficultyOrderA = difficultyOrder.indexOf(a.difficulty);
    const difficultyOrderB = difficultyOrder.indexOf(b.difficulty);
    return difficultyOrderA - difficultyOrderB;
  });
  return sortedChallengesByDifficulty;
}
