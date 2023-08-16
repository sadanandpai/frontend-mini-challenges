import { useEffect, useState } from 'react';

import Contributor from './Contributor';
import axios from 'axios';
import { existingContributors } from './contributors';
import styles from './contribution.module.scss';

function Contribution() {
  const [contributors, setContributors] = useState(existingContributors);

  useEffect(() => {
    axios
      .get('https://api.github.com/repos/sadanandpai/frontend-mini-challenges/contributors')
      .then((response) => {
        setContributors(response.data);
      })
      .catch(() => {
        // no action
      });
  }, []);

  return (
    <>
      <h2 className={styles.heading}>Contributors</h2>
      <section className={styles.contributionContainer}>
        {contributors.map((contributor) => (
          <Contributor key={contributor.login} contributor={contributor} />
        ))}
      </section>
    </>
  );
}

export default Contribution;
