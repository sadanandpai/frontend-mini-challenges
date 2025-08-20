import { Moon, Sun, Trophy } from 'lucide-react';
import { logo_dark, logo_light } from '@fmc/assets';

import { Link } from 'react-router-dom';
import { REPO_URL } from '@fmc/data/content';
import { ThemeContext } from '@/components/theme-context';
import { githubSVG } from '@fmc/assets';
import styles from './navbar.module.scss';
import { useContext } from 'react';

export function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const logoSrc = isDark ? logo_dark : logo_light;

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.logo}>
          <img src={logoSrc} alt="Frontend Mini Challenges Logo" className={styles.logoImage} />
          <span className={styles.logoText}>Frontend Mini Challenges</span>
          <span className={styles.logoMobileText}>FMC</span>
        </Link>

        <div className={styles.navLinks}>
          <Link to="/leaderboard" className={styles.navLink}>
            <Trophy size="1.5rem" className={styles.navIcon} />
            <span>Leaderboard</span>
          </Link>

          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
            aria-label="GitHub Repository"
          >
            <img src={githubSVG} alt="GitHub" className={styles.githubIcon} />
          </a>

          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? (
              <Moon className={styles.themeIcon} size="1.5rem" />
            ) : (
              <Sun className={styles.themeIcon} size="1.5rem" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
