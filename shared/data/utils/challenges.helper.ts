import { EDifficulty, IChallenge, OptionType } from '../types';
import { IGetChallengesByid } from '../types/challenge';

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
  return challenges.filter((item) => {
    const itemValue = item[key];
    // Special handling for tags & contributors
    if ((key === 'tags' || key === 'contributors') && Array.isArray(itemValue)) {
      const tags: string[] = itemValue;
      if (Array.isArray(value)) {
        return (value as string[]).some((val) => {
          const searchValue = caseInsensitive ? val.toLowerCase() : val;
          return tags.some((tag) =>
            caseInsensitive ? tag.toLowerCase().includes(searchValue) : tag.includes(val)
          );
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

export function getChallengesByContributors(challenges: IChallenge[], contributors: OptionType[]) {
  if (!contributors || contributors.length === 0) {
    return challenges;
  }
  const contributorIds = contributors.map((contributor) => contributor.value);
  let data = challenges.filter((challenge) => contributorIds.includes(challenge.developer));
  return data;
}
export function getChallengesByTitle(challenges: IChallenge[], title: string) {
  if (!title || title.length === 0) {
    return challenges;
  }
  let data = challenges.filter((challenge) => {
    return challenge?.title.toLowerCase().includes(title.toLowerCase());
  });
  return data;
}

export function getChallengesByid({ challenges, title, contributors }: IGetChallengesByid) {
  let data = [...challenges];
  if ((!title || title.length === 0) && (!contributors || contributors.length === 0)) {
    data = challenges;
  }
  if (title && contributors.length > 0) {
    data = getChallengesByTitle(challenges, title);
    data = getChallengesByContributors(data, contributors);
  }
  if (title && contributors.length === 0) {
    data = getChallengesByTitle(challenges, title);
  }
  if (contributors.length > 0 && !title) {
    data = getChallengesByContributors(challenges, contributors);
  }
  return data;
}
