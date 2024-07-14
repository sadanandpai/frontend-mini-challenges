import { useEffect, useState } from 'react';
import { Reorder } from 'framer-motion';
import Contributor from './contributor';
import { IContributor, maintainersList } from './contributors-list';
import styles from './contribution.module.scss';
import axios from 'axios';

async function getContributors() {
  const response = await axios.get<{ login: string; avatar_url: string }[]>(
    'https://api.github.com/repos/sadanandpai/frontend-mini-challenges/contributors?per_page=1000'
  );
  return response.data.map((contributor) => ({
    username: contributor.login,
    avatar: contributor.avatar_url?.match(/\d+/)?.[0] ?? '',
  }));
}

function Contribution() {
  const [contributors, setContributors] = useState<IContributor[]>([]);
  const [maintainers] = useState(maintainersList);

  useEffect(() => {
    getContributors().then((list) => setContributors(list.slice(2)));
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () =>
        setContributors((contributors) =>
          contributors.map((x) => x).sort(() => 0.5 - Math.random())
        ),
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

      <section className={styles.maintainerContainer}>
        <Contributor key={maintainers[0].username} {...maintainers[0]} />
        <Contributor key={maintainers[1].username} {...maintainers[1]} />
      </section>

      <Reorder.Group
        axis="y"
        onReorder={setContributors}
        values={contributors}
        className={styles.contributionContainer}
      >
        {contributors.map((contributor) => (
          <Reorder.Item
            value={contributor.username}
            key={contributor.username}
            className={styles.listContributor}
          >
            <Contributor key={contributor.username} {...contributor} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </>
  );
}

export default Contribution;
