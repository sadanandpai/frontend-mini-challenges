import { existingContributors } from './contributors';
import styles from './contribution.module.scss';

function Contributor({ contributor }: { contributor: (typeof existingContributors)[0] }) {
  return (
    <a href={contributor.html_url} title={contributor.login} className={styles.contributor}>
      <img src={contributor.avatar_url} alt={contributor.login} loading="lazy" />
    </a>
  );
}

export default Contributor;
