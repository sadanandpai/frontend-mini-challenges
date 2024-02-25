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


export function filterChallengeByKey<T extends keyof IChallenge, K extends IChallenge[T]>(
  challenges: IChallenge[],
  key: T,
  value: K,
  caseInsensitive: boolean = true
): IChallenge[] {
  return challenges.filter(item => {
    const itemValue = item[key];
    // Special handling for tags & contributors
    if ((key === "tags" || key === "contributors") && Array.isArray(itemValue)) {
      const tags: string[] = itemValue;
      if (Array.isArray(value)) {
        return (value as string[]).some(val => {
          const searchValue = caseInsensitive ? val.toLowerCase() : val;
          return tags.some(tag => caseInsensitive ? tag.toLowerCase().includes(searchValue) : tag.includes(val));
        });
      }
    }

    // Handling for strings with case insensitivity
    else if (typeof itemValue === 'string' && typeof value === 'string') {
      if (caseInsensitive) {
        return itemValue.toLowerCase().includes((value as unknown as string).toLowerCase());
      }
      return itemValue.includes(value as unknown as string);
    }

    // Default equality check for other types
    return itemValue === value;
  });
}
