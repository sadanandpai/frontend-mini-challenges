import { ETag, IChallenge, OptionType } from '@fmc/data/types';
import { REPO_URL, contributors } from '@fmc/data/content';
import { filtersHelper, getChallengesByid } from '@fmc/data/utils';
import { useEffect, useState } from 'react';

import Challenge from './challenge';
import { ChallengeFilters } from './challenge-filter';
import styles from './challenge-grid.module.scss';

interface Props {
  challenges: IChallenge[];
  linkPrefix: string;
  links: { tech: string; imgSrc: string; active: boolean }[];
  techImg: string;
}

function ChallengeGrid({ challenges, linkPrefix, links, techImg }: Props) {
  const initialFilters = filtersHelper();

  const [searchInput, setSearchInput] = useState(initialFilters.searchInput);
  const [filteredChallenges, setFilteredChallenges] = useState(challenges);
  const [optionSelected, setOptionSelected] = useState<OptionType[]>(initialFilters.optionSelected);
  const [selectedDifficulties, setSelectedDifficulties] = useState<OptionType[]>(
    initialFilters.selectedDifficulties
  );
  const [selectedChallengesByTags, setSelectedChallengesByTags] = useState<ETag[]>(
    initialFilters.selectedChallengesByTags
  );
  const [tag, setTag] = useState(initialFilters.tag);
  const [newChallenge, setNewChallenge] = useState<boolean>(initialFilters.newChallenge);

  useEffect(() => {
    setFilteredChallenges(() =>
      getChallengesByid({
        challenges: [...challenges.values()],
        title: searchInput,
        description: searchInput,
        contributors: optionSelected,
        difficulties: selectedDifficulties,
        tags: selectedChallengesByTags, // Convert OptionType[] to ETag[]
        newChallenge,
      })
    );

    const searchFilters = {
      searchInput,
      optionSelected,
      selectedDifficulties,
      tag,
      selectedChallengesByTags,
      newChallenge,
    };

    sessionStorage.setItem('searchFilters', JSON.stringify(searchFilters));

    if (!searchInput && !optionSelected && !selectedDifficulties && !newChallenge) {
      setFilteredChallenges(challenges);
    }
  }, [
    challenges,
    searchInput,
    optionSelected,
    selectedDifficulties,
    tag,
    selectedChallengesByTags,
    newChallenge,
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
        tag={tag}
        setTag={setTag}
        newChallenge={newChallenge}
        setNewChallenge={setNewChallenge}
      />

      {filteredChallenges.length ? (
        <div className={styles.challengeGrid}>
          {filteredChallenges.map((challenge) => (
            <Challenge
              key={challenge.title}
              link={linkPrefix + challenge.link}
              contributor={contributors.get(challenge.developer)}
              challenge={challenge}
              techImg={techImg}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyMessage}>
          No challenges found...{' '}
          <div>
            maybe try adding one{' '}
            <a
              href={`${REPO_URL}/blob/main/CONTRIBUTING.md#challenge-contribution`}
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
