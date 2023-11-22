import { useEffect, useState } from 'react';

import Contributor from './Contributor';
import { contributorsList } from './contributors-list';
import styles from './contribution.module.scss';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import axios from 'axios';

async function getContributors() {
  const response = await axios.get(
    'https://api.github.com/repos/sadanandpai/frontend-mini-challenges/contributors?per_page=1000'
  );
  return response.data.map((contributor) => ({
    username: contributor.login,
    avatar: contributor.avatar_url?.match(/\d+/)[0],
  }));
}

function Contribution() {
  const [contributors, setContributors] = useState(contributorsList);
  const [parent] = useAutoAnimate();

  useEffect(() => {
    getContributors().then(setContributors);
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
          <Contributor key={contributor.username} {...contributor} />
        ))}
      </section>
    </>
  );
}

export default Contribution;
