import assets from '@fmc/assets/images';
import { contributors } from '@fmc/data/content';
import { IChallenge, OptionType } from '@fmc/data/types';
import { getSortedChallengesByDifficulty } from '@fmc/data/utils';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Challenge from './challenge';
import styles from './challenge-grid.module.scss';
import CustomSelect from '@/components/common/multi-select/multi-select';
import { getChallengesByid } from '../../../../../../../shared/data/utils/challenges.helper';

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
  const [optionSelected, setOptionSelected] = useState<OptionType[] | []>([]);
  useEffect(() => {
    setSortedChallenges(() =>
      getChallengesByid({
        challenges: [...challenges.values()],
        title: searchInput,
        contributors: optionSelected,
      })
    );

    if (!searchInput && !optionSelected) {
      setSortedChallenges(() => getSortedChallengesByDifficulty(challenges));
    }
  }, [challenges, searchInput, optionSelected]);
  const DeveloperList = useMemo(() => {
    const developerList = new Map();
    for (const [key, value] of contributors) {
      developerList.set(key, value);
    }
    const data: { value: string; label: string }[] = [];
    developerList.forEach((value, key) => {
      if (key !== '' && value?.name !== '') {
        data.push({ value: key, label: value?.name });
      }
    });
    return data;
  }, []);
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
        <CustomSelect
          data={DeveloperList}
          optionSelected={optionSelected}
          setOptionSelected={(val: OptionType[]) => setOptionSelected(val)}
        />
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
