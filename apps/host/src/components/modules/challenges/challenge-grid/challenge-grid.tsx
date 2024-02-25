import { contributors } from '@fmc/data/content';
import { getSortedChallengesByDifficulty, filterChallengeByKey } from '@fmc/data/utils';
import styles from './challenge-grid.module.scss';
import { AvatarGroup } from '../avatar/avatar';
import { IChallenge } from '@fmc/data/types';
import { useEffect, useState } from 'react';
import assets from '@fmc/assets/images';
import { Link } from 'react-router-dom';

interface Props {
  challenges: Map<string, IChallenge>;
  linkPrefix: string;
  links: {tech: string, imgSrc: string, active: boolean }[];
}

function ChallengeGrid({ challenges, linkPrefix, links }: Props) {
  const [searchInput, setSearchInput] = useState<string>('');
  const [sortedChallenges, setSortedChallenges] = useState(() => getSortedChallengesByDifficulty(challenges));

  useEffect(() => {
    if (searchInput) {
      setSortedChallenges(() => filterChallengeByKey([...challenges.values()], "title", searchInput))
    } else {
      setSortedChallenges(() => getSortedChallengesByDifficulty(challenges));
    }
  }, [challenges, searchInput]);

  return (
    <div className={styles.container}>
      <div className={styles.filterOptionWrapper}>
        <div className={styles.searchInputWrapper}>
          <input type="text" name="searchTextInput" placeholder='Search challenge...' className={styles.searchInput} value={searchInput} onChange={(e) => setSearchInput(e.target.value.trim())} />
          <img src={assets.searchIconSVG} alt="search challenges by title" width={15} height={15} className={styles.searchIcon} />
        </div>
        <div className={styles.filterByTechWrapper}>
          {links.map((link) => <Link to={`/${link.tech}`} key={link.tech}>
            <img src={link.imgSrc} width={35} height={35} className={link.active ? styles.activeTech : ''} alt={`filter by ${link.tech}`} />
          </Link>)}
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
