import { contributors } from '@fmc/data/content';
import { IChallenge } from '@fmc/data/types';
import { filterChallengeByKey, getSortedChallengesByDifficulty } from '@fmc/data/utils';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useEffect, useState } from 'react';
import Challenge from './challenge';
import ChallengeFilters from './challenge-filter';
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
      <ChallengeFilters searchInput={searchInput} setSearchInput={setSearchInput} links={links} />
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
    </div>
  );
}

export default ChallengeGrid;
