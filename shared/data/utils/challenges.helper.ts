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

//TODO: make filter function that takes key to search in & value to search for, and boolean for case-insensitive
export function getSortedChallengesByTitle(challenges: Map<string, IChallenge>, value: string) {
  const sortedChallengesByTitle = [...challenges.values()];
  return sortedChallengesByTitle.filter(challenge => challenge.title.toLowerCase().includes(value.toLowerCase()));
}