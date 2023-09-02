import { useEffect, useState } from 'react';

import Contributor from './Contributor';
import axios from 'axios';
import { existingContributors } from './contributors';
import styles from './contribution.module.scss';
import { useAutoAnimate } from '@formkit/auto-animate/react';

function Contribution() {
  const [contributors, setContributors] = useState(existingContributors);
  const [parent] = useAutoAnimate();

  useEffect(() => {
    axios
      .get('https://api.github.com/repos/sadanandpai/frontend-mini-challenges/contributors')
      .then((response) => {
        setContributors(response.data);
      })
      .catch(() => {
        // no action is needed as fallback is already considered
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () => setContributors((contributors) => contributors.map((x) => x).sort(() => 0.5 - Math.random())),
      5000
    );

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h2 className={styles.heading} id="contributors">
        Contributors
      </h2>
      <section className={styles.contributionContainer} ref={parent}>
        {contributors.map((contributor) => (
          <Contributor key={contributor.login} contributor={contributor} />
        ))}
      </section>
    </>
  );
}

export default Contribution;
