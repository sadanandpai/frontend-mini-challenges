import styles from "./Theme.module.css";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main
      className={`${styles.main} ${
        theme === "dark-theme" ? styles.darkTheme : styles.lightTheme
      }`}
    >
      <h1>Try to toggle the theme and see the change !!!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </main>
  );
}
