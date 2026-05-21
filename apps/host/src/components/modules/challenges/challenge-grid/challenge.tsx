import type { IChallenge, IContributor } from '@fmc/data/types';

import { AvatarGroup } from '../avatar/avatar';
import styles from './challenge-grid.module.scss';

interface Props {
  link: string;
  contributor?: IContributor;
  challenge: IChallenge;
}

const Challenge = ({ link, contributor, challenge }: Props) => {
  return (
    <a
      key={challenge.title}
      className={`${styles.challengeCard} ${styles[challenge.difficulty]} ${challenge.isNew ? styles.new : ''}`}
      href={link}
    >
      <div>
        <div className={styles.cardHeader}>
          <div className={styles.titleWrapper}>
            <div className={styles.titleContainer}>
              <h3>{challenge.title}</h3>
              {challenge.isNew && <span className={styles.newTag}>NEW</span>}
            </div>
          </div>
          <div className={styles.difficultyBadge}>
            <div className={styles.ellips} />
            {challenge.difficulty}
          </div>
        </div>
        {challenge.description && (
          <p className={styles.description} title={challenge.description}>
            {challenge.description}
          </p>
        )}
      </div>

      <div className={styles.cardFooter}>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {challenge.developer && (
            <div className={styles.developer}>
              <img src={`${contributor?.pic}?v=4&s=75`} alt="" />
              <span className={styles.name}>{contributor?.name}</span>
            </div>
          )}
          {challenge.contributors && challenge.contributors.length > 0 && (
            <AvatarGroup contributorNames={challenge.contributors} />
          )}
        </div>
        <div className={styles.badgesContainer}>
          {challenge.tags?.find((e) => e === 'interview') && (
            <div className={styles.interviewBadge}>Interview</div>
          )}
        </div>
      </div>
    </a>
  );
};

export default Challenge;
