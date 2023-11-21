import { useEffect, useState } from 'react';

import Contributor from './Contributor';
import { contributorsList } from './contributors-list';
import styles from './contribution.module.scss';
import { useAutoAnimate } from '@formkit/auto-animate/react';

function Contribution() {
  const [contributors, setContributors] = useState(contributorsList);
  const [parent] = useAutoAnimate();

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
          <Contributor key={contributor.username} {...contributor} />
        ))}
      </section>
    </>
  );
}

export default Contribution;
