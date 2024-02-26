import { AvatarGroup } from '../avatar/avatar';
import styles from './challenge-grid.module.scss';
import type { IChallenge, IContributor } from '@fmc/data/types';

interface Props {
  link: string;
  contributor?: IContributor;
  challenge: IChallenge;
}

const Challenge = ({ link, contributor, challenge }: Props) => {
  return (
    <a
      key={challenge.title}
      className={`${styles.challengeCard} ${styles[challenge.difficulty]}`}
      href={link}
    >
      {challenge.isNew && <span className={styles.new}>New</span>}
      <div>
        <h3>{challenge.title}</h3>

        <div className={styles.avatarContainer}>
          {challenge.developer && (
            <div className={styles.developer}>
              <img src={contributor?.pic} alt="" />
              <span className={styles.name}>{contributor?.name}</span>
            </div>
          )}
          {challenge.contributors && <AvatarGroup contributorNames={challenge.contributors} />}
        </div>
      </div>
    </a>
  );
};

export default Challenge;
