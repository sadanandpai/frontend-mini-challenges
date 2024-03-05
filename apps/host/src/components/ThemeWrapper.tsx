import styles from '@/styles.module.scss';
import { ReactElement, createContext, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  //This is for not making toggleTheme Optional since it does have a void function
  toggleTheme: () => {},
});

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
