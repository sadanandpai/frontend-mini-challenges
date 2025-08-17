import { REPO_CONTRIBUTORS_API, REPO_URL } from '@fmc/data/content';
import { useEffect, useState } from 'react';

import { Contributor } from '@/pages/types';
import axios from 'axios';
import styles from './contribution.module.scss';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export function Contribution() {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [contributorsRef] = useAutoAnimate<HTMLDivElement>();

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await axios.get<Contributor[]>(`${REPO_CONTRIBUTORS_API}?per_page=100`);

        const data = response.data;
        setContributors(data);
      } catch (err) {
        console.error('Error fetching contributors:', err);
        setError('Failed to load contributors. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  return (
    <>
      <section className={styles.contributors}>
        <h2 className={styles.contributorsTitle}>Our Amazing Contributors</h2>

        {loading ? (
          <p>Loading contributors...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <div className={styles.contributorsGrid} ref={contributorsRef}>
              {contributors.map((contributor) => (
                <a
                  key={contributor.id}
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contributorsCard}
                  title={`${contributor.login} (${contributor.contributions} contributions)`}
                >
                  <img
                    src={`${contributor.avatar_url}&s=75`}
                    alt={contributor.login}
                    loading="lazy"
                    className={styles.contributorsCardImg}
                    width={75}
                    height={75}
                  />
                  <span>{contributor.login}</span>
                </a>
              ))}
            </div>
            <a
              href={`${REPO_URL}/graphs/contributors`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contributorsLink}
            >
              View all contributors on GitHub →
            </a>
          </>
        )}
      </section>
    </>
  );
}
