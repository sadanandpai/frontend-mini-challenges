import { contributors } from '@fmc/data/content';
import { getSortedChallengesByDifficulty } from '@fmc/data/utils';
import styles from './challenge-grid.module.scss';
import { AvatarGroup } from '../avatar/avatar';
import { IChallenge } from '@fmc/data/types';

interface Props {
  challenges: Map<string, IChallenge>;
  linkPrefix: string;
}

function ChallengeGrid({ challenges, linkPrefix }: Props) {
  const sortedChallengesByDifficulty = getSortedChallengesByDifficulty(challenges);

  return (
    <div className={styles.challengeGrid}>
      {sortedChallengesByDifficulty.map((challenge) => (
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
  );
}

export default ChallengeGrid;
