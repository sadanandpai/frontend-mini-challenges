import { IContributor } from './contributors-list';
import styles from './contribution.module.scss';

function Contributor({ username, avatar }: IContributor) {
  return (
    <a
      href={`https://github.com/${username}`}
      title={username}
      className={styles.contributor}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={`https://avatars.githubusercontent.com/u/${avatar}`}
        alt={username}
        loading="lazy"
      />
    </a>
  );
}

export default Contributor;
