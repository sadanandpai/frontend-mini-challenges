import { useEffect, useState } from 'react';
import { IChallenge, OptionType } from '@fmc/data/types';
import { contributors } from '@fmc/data/content';
import Challenge from './challenge';
import styles from './challenge-grid.module.scss';
import { getChallengesByid } from '../../../../../../../shared/data/utils/challenges.helper';
import ChallengeFilters from './challenge-filter';
import { ETag } from '../../../../../../../shared/data/types/challenge';

interface Props {
  challenges: IChallenge[];
  linkPrefix: string;
  links: { tech: string; imgSrc: string; active: boolean }[];
}

function ChallengeGrid({ challenges, linkPrefix, links }: Props) {
  const [searchInput, setSearchInput] = useState('');
  const [filteredChallenges, setFilteredChallenges] = useState(challenges);
  const [optionSelected, setOptionSelected] = useState<OptionType[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<OptionType[]>([]);
  const [selectedChallengesByTags, setSelectedChallengesByTags] = useState<ETag[]>([]);
  const [isSegmentBtn1, setIsSegmentBtn1] = useState(false);

  useEffect(() => {
    setFilteredChallenges(() =>
      getChallengesByid({
        challenges: [...challenges.values()],
        title: searchInput,
        contributors: optionSelected,
        difficulties: selectedDifficulties,
        tags: selectedChallengesByTags, // Convert OptionType[] to ETag[]
      })
    );

    if (!searchInput && !optionSelected && !selectedDifficulties) {
      setFilteredChallenges(challenges);
    }
  }, [
    challenges,
    searchInput,
    optionSelected,
    selectedDifficulties,
    isSegmentBtn1,
    selectedChallengesByTags,
  ]);
  return (
    <div className={styles.container}>
      <ChallengeFilters
        links={links}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        optionSelected={optionSelected}
        setOptionSelected={setOptionSelected}
        selectedDifficulties={selectedDifficulties}
        setSelectedDifficulties={setSelectedDifficulties}
        setSelectedChallengesByTags={setSelectedChallengesByTags}
        isSegmentBtn1={isSegmentBtn1}
        setIsSegmentBtn1={setIsSegmentBtn1}
      />

      {filteredChallenges.length ? (
        <div className={styles.challengeGrid}>
          {filteredChallenges.map((challenge) => (
            <Challenge
              key={challenge.title}
              link={linkPrefix + challenge.link}
              contributor={contributors.get(challenge.developer)}
              challenge={challenge}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyMessage}>
          No challenges found...{' '}
          <div>
            maybe try adding one{' '}
            <a
              href="https://github.com/sadanandpai/frontend-mini-challenges/blob/main/CONTRIBUTING.md#challenge-contribution"
              target="_blank"
              rel="noopener noreferrer"
            >
              here{' '}
            </a>
            🤓
          </div>
        </div>
      )}
    </div>
  );
}

export default ChallengeGrid;
