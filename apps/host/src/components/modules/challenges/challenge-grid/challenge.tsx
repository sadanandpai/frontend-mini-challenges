import type { IChallenge, IContributor } from '@fmc/data/types';

import { AvatarGroup } from '../avatar/avatar';
import styles from './challenge-grid.module.scss';

interface Props {
  link: string;
  contributor?: IContributor;
  challenge: IChallenge;
  techImg: string;
}

const Challenge = ({ link, contributor, challenge }: Props) => {
  return (
    <a
      key={challenge.title}
      className={`${styles.challengeCard} ${styles[challenge.difficulty]} ${challenge.isNew && styles.new}`}
      href={link}
    >
      {challenge.isNew && <div className={styles.newTag}>NEW</div>}
      <div className="flex-space-between">
        <div className="flex-space-between">
          {/* <div>
            <img src={techImg} alt={'alt'} width="30px" />
          </div> */}
          <h3>{challenge.title}</h3>
        </div>
        <div className={styles.difficultyBadge}>
          <div className={styles.ellips} />
          {challenge.difficulty}
        </div>
      </div>
      <div className="flex-space-between">
        <div className="flex-space-between">
          {challenge.developer && (
            <div className={styles.developer}>
              <img src={`${contributor?.pic}?v=4&s=75`} alt="" />
              <span className={styles.name}>{contributor?.name}</span>
            </div>
          )}
          <div>
            {challenge.contributors && <AvatarGroup contributorNames={challenge.contributors} />}
          </div>
        </div>
        {challenge.tags!.find((e) => e === 'interview') && (
          <div className={styles.interviewBadge}>Interview</div>
        )}
      </div>
    </a>
  );
};

export default Challenge;
