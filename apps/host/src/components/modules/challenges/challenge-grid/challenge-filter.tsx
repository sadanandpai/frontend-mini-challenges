import { ETag, OptionType } from '@fmc/data/types';

import CustomCheckbox from '@/components/common/checkbox/checkbox';
import { CustomSelect } from '@/components/common/multi-select/multi-select';
import { Difficulties } from '@fmc/data/constants';
import { Link } from 'react-router-dom';
import Tags from '@/components/common/tags/tags';
import { contributors } from '@fmc/data/content';
import styles from './challenge-grid.module.scss';

const developersMap = new Map();
for (const [key, value] of contributors) {
  developersMap.set(key, value);
}

const developers: { value: string; label: string }[] = [];
developersMap.forEach((value, key) => {
  if (key !== '' && value?.name !== '') {
    developers.push({ value: key, label: value?.name });
  }
});

interface Props {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  links: { tech: string; imgSrc: string; active: boolean }[];
  optionSelected: OptionType[] | [];
  setOptionSelected: React.Dispatch<React.SetStateAction<OptionType[] | []>>;
  selectedDifficulties: OptionType[] | [];
  setSelectedDifficulties: React.Dispatch<React.SetStateAction<OptionType[] | []>>;
  tag: ETag;
  setTag: React.Dispatch<React.SetStateAction<ETag>>;
  setSelectedChallengesByTags: React.Dispatch<React.SetStateAction<ETag[] | []>>;
  setNewChallenge: React.Dispatch<React.SetStateAction<boolean>>;
  newChallenge: boolean;
}

export function ChallengeFilters({
  searchInput,
  setSearchInput,
  optionSelected,
  setOptionSelected,
  selectedDifficulties,
  setSelectedDifficulties,
  links,
  tag,
  setTag,
  setSelectedChallengesByTags,
  setNewChallenge,
  newChallenge,
}: Props) {
  return (
    <div className={styles.filterOptionWrapper}>
      <div className={styles.searchInputWrapper}>
        <input
          type="search"
          name="searchTextInput"
          placeholder="Search Challenge"
          className={styles.searchInput}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value.trim())}
        />
      </div>

      <CustomSelect
        data={developers}
        optionSelected={optionSelected}
        setOptionSelected={(val: OptionType[]) => setOptionSelected(val)}
        selectPlaceholder="Select Developers"
      />

      <CustomSelect
        data={Difficulties}
        optionSelected={selectedDifficulties}
        setOptionSelected={(val: OptionType[]) => setSelectedDifficulties(val)}
        selectPlaceholder="Select Difficulties"
      />

      <CustomCheckbox
        className={styles.checkbox}
        checked={newChallenge}
        setNewChallenge={setNewChallenge}
        label="New Challenges"
        containerClass={styles.checkboxContainer}
      />

      <Tags tag={tag} setTag={setTag} setSelectedChallengesByTags={setSelectedChallengesByTags} />

      <div className={styles.filterByTechWrapper}>
        {links.map((link) => (
          <Link to={`/${link.tech}`} key={link.tech}>
            <img
              src={link.imgSrc}
              width={35}
              height={35}
              className={link.active ? styles.activeTech : ''}
              alt={`filter by ${link.tech}`}
              title={link.tech}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
