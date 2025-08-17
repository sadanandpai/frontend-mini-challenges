import { angularImg, cssImg, jsImg, reactImg, vueImg } from '@fmc/assets';
import { useEffect, useRef, useState } from 'react';

import { generateLeaderboardData } from '@/helpers/leaderboard';
import styles from './leaderboard.module.scss';

const leaderboardData = generateLeaderboardData();

export function Leaderboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showScrollHint, setShowScrollHint] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        const { scrollWidth, clientWidth } = containerRef.current;
        setShowScrollHint(scrollWidth > clientWidth);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' }>({
    key: 'totalContributions',
    direction: 'desc',
  });

  const sortedData = [...leaderboardData.entries()].sort((a, b) => {
    const [userA, userB] = [a[1], b[1]];
    let comparison = 0;

    if (sortConfig.key === 'totalContributions') {
      comparison = userA.numberOfContributions - userB.numberOfContributions;
    } else {
      comparison =
        (userA.contributions[sortConfig.key as keyof typeof userA.contributions] || 0) -
        (userB.contributions[sortConfig.key as keyof typeof userB.contributions] || 0);
    }

    return sortConfig.direction === 'asc' ? comparison : -comparison;
  });

  const requestSort = (key: string) => {
    setSortConfig((prevConfig) => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'desc' ? 'asc' : 'desc',
    }));
  };

  const getSortIndicator = (key: string) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  return (
    <div className={styles.leaderboard}>
      {showScrollHint && (
        <div className={styles.scrollHint}>
          <span>Scroll right →</span>
        </div>
      )}
      <div ref={containerRef} className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th className={styles.userHeader}>Contributor</th>
              <th
                className={`${styles.sortable} ${sortConfig.key === 'totalContributions' ? styles.active : ''}`}
                onClick={() => requestSort('totalContributions')}
              >
                Total {getSortIndicator('totalContributions')}
              </th>
              <th
                className={`${styles.sortable} ${sortConfig.key === 'css' ? styles.active : ''}`}
                onClick={() => requestSort('css')}
              >
                <img src={cssImg} alt="CSS" className={styles.techIcon} />
                {getSortIndicator('css')}
              </th>
              <th
                className={`${styles.sortable} ${sortConfig.key === 'js' ? styles.active : ''}`}
                onClick={() => requestSort('js')}
              >
                <img src={jsImg} alt="JavaScript" className={styles.techIcon} />
                {getSortIndicator('js')}
              </th>
              <th
                className={`${styles.sortable} ${sortConfig.key === 'react' ? styles.active : ''}`}
                onClick={() => requestSort('react')}
              >
                <img src={reactImg} alt="React" className={styles.techIcon} />
                {getSortIndicator('react')}
              </th>
              <th
                className={`${styles.sortable} ${sortConfig.key === 'angular' ? styles.active : ''}`}
                onClick={() => requestSort('angular')}
              >
                <img src={angularImg} alt="Angular" className={styles.techIcon} />
                {getSortIndicator('angular')}
              </th>
              <th
                className={`${styles.sortable} ${sortConfig.key === 'vue' ? styles.active : ''}`}
                onClick={() => requestSort('vue')}
              >
                <img src={vueImg} alt="Vue" className={styles.techIcon} />
                {getSortIndicator('vue')}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map(([username, user], index) => (
              <tr key={username} className={styles.userRow}>
                <td className={styles.rank}>{index + 1}</td>
                <td className={styles.userCell}>
                  <a
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.userLink}
                  >
                    <img
                      src={`${user.pic}&s=75`}
                      alt={user.name}
                      className={styles.avatar}
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/40';
                      }}
                    />
                    <span className={styles.userName}>{user.name || username}</span>
                  </a>
                </td>
                <td className={styles.contributionCount}>{user.numberOfContributions}</td>
                <td className={styles.techCell}>{user.contributions.css || 0}</td>
                <td className={styles.techCell}>{user.contributions.js || 0}</td>
                <td className={styles.techCell}>{user.contributions.react || 0}</td>
                <td className={styles.techCell}>{user.contributions.angular || 0}</td>
                <td className={styles.techCell}>{user.contributions.vue || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
