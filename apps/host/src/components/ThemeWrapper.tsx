import { ReactElement, useState } from 'react';
import { Theme, ThemeContext } from './theme-context';

import styles from '@/styles.module.scss';

export const ThemeWrapper = ({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState<Theme>((localStorage.getItem('theme') as Theme) || 'light');

  const toggleTheme = (): void => {
    const selectedTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', selectedTheme);
    setTheme(selectedTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={styles.containerWrapper} data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
