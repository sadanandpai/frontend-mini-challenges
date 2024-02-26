import styles from './challenge-grid.module.scss';
import assets from '@fmc/assets/images';
import { Link } from 'react-router-dom';

interface Props {
  searchInput: string, 
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  links: { tech: string; imgSrc: string; active: boolean }[];
}

const ChallengeFilters = ({ searchInput, setSearchInput, links }: Props) => {
  return (
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
  )
}

export default ChallengeFilters