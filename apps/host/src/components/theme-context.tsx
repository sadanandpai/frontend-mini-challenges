import { createContext } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  //This is for not making toggleTheme Optional since it does have a void function
  toggleTheme: () => {},
});
