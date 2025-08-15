import { Moon, Sun, Trophy } from 'lucide-react';
import { logo, logo_dark } from '@fmc/assets/images';

import { Link } from 'react-router-dom';
import { ThemeContext } from '@/components/theme-context';
import { githubSVG } from '@fmc/assets/images';
import styles from './navbar.module.scss';
import { useContext } from 'react';

export function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const logoSrc = isDark ? logo_dark : logo;

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
            <Trophy size="24" className={styles.navIcon} />
            <span>Leaderboard</span>
          </Link>

          <a
            href="https://github.com/sadanandpai/frontend-mini-challenges"
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
            {isDark ? <Moon className={styles.themeIcon} /> : <Sun className={styles.themeIcon} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
