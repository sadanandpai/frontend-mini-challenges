import { contributors } from '@fmc/data/content';
import { getSortedChallengesByDifficulty, getSortedChallengesByTitle } from '@fmc/data/utils';
import styles from './challenge-grid.module.scss';
import { AvatarGroup } from '../avatar/avatar';
import { IChallenge } from '@fmc/data/types';
import { useState } from 'react';
import assets from '@fmc/assets/images';

interface Props {
  challenges: Map<string, IChallenge>;
  linkPrefix: string;
}

function ChallengeGrid({ challenges, linkPrefix }: Props) {
  const [searchInput, setSearchInput] = useState<string>('');
  const [sortedChallenges, setSortedChallenges] = useState(() => getSortedChallengesByDifficulty(challenges));
  
  const filterByTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value.trim();
    if (searchInput) {
      setSortedChallenges(() => getSortedChallengesByTitle(challenges, searchText))
    } else 
      setSortedChallenges(() => getSortedChallengesByDifficulty(challenges))
    setSearchInput(searchText);
  }

  return (
    <div className={styles.container}>
      <div className={styles.filterOptionWrapper}>
        <div className={styles.searchInputWrapper}>
          <input type="text" name="searchTextInput" placeholder='Search challenge...' className={styles.searchInput} value={searchInput} onChange={filterByTitle} />
          <img src={assets.searchIconSVG} alt="search challenges by title" width={15} height={15} className={styles.searchIcon} />
        </div>
      </div>
      <div className={styles.challengeGrid}>
        {sortedChallenges.map((challenge) => (
          <a
            key={challenge.title}
            className={`${styles.challengeCard} ${styles[challenge.difficulty]}`}
            href={linkPrefix + challenge.link}
          >
            {challenge.isNew && <span className={styles.new}>New</span>}
            <div>
              <h3>{challenge.title}</h3>

              <div className={styles.avatarContainer}>
                {challenge.developer && (
                  <div className={styles.developer}>
                    <img src={contributors.get(challenge.developer)?.pic} alt="" />
                    <span className={styles.name}>{contributors.get(challenge.developer)?.name}</span>
                  </div>
                )}
                {challenge.contributors && <AvatarGroup contributorNames={challenge.contributors} />}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ChallengeGrid;
