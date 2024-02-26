import assets from '@fmc/assets/images';
import { contributors } from '@fmc/data/content';
import { IChallenge } from '@fmc/data/types';
import { filterChallengeByKey, getSortedChallengesByDifficulty } from '@fmc/data/utils';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Challenge from './challeng';
import styles from './challenge-grid.module.scss';

interface Props {
  challenges: Map<string, IChallenge>;
  linkPrefix: string;
  links: { tech: string; imgSrc: string; active: boolean }[];
}

function ChallengeGrid({ challenges, linkPrefix, links }: Props) {
  const [parent] = useAutoAnimate();
  const [searchInput, setSearchInput] = useState<string>('');
  const [sortedChallenges, setSortedChallenges] = useState(() =>
    getSortedChallengesByDifficulty(challenges)
  );

  useEffect(() => {
    if (searchInput) {
      setSortedChallenges(() =>
        filterChallengeByKey([...challenges.values()], 'title', searchInput)
      );
    } else {
      setSortedChallenges(() => getSortedChallengesByDifficulty(challenges));
    }
  }, [challenges, searchInput]);

  return (
    <div className={styles.container}>
      <div className={styles.filterOptionWrapper}>
        <div className={styles.searchInputWrapper}>
          <input
            type="text"
            name="searchTextInput"
            placeholder="Search challenge..."
            className={styles.searchInput}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value.trim())}
          />
          <img
            src={assets.searchIconSVG}
            alt="search challenges by title"
            width={15}
            height={15}
            className={styles.searchIcon}
          />
        </div>
        <div className={styles.filterByTechWrapper}>
          {links.map((link) => (
            <Link to={`/${link.tech}`} key={link.tech}>
              <img
                src={link.imgSrc}
                width={35}
                height={35}
                className={link.active ? styles.activeTech : ''}
                alt={`filter by ${link.tech}`}
              />
            </Link>
          ))}
        </div>
      </div>
      {sortedChallenges.length ? (
        <div className={styles.challengeGrid} ref={parent}>
          {sortedChallenges.map((challenge) => (
            <Challenge
              key={challenge.title}
              link={linkPrefix + challenge.link}
              contributor={contributors.get(challenge.developer)}
              challenge={challenge}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyMessage}>No challenges found...  <div>maybe try adding one <a href="https://github.com/sadanandpai/frontend-mini-challenges/blob/main/CONTRIBUTING.md#challenge-contribution" target="_blank" rel="noopener noreferrer">here </a>🤓</div></div>
      )}
    </div>
  );
}

export default ChallengeGrid;
