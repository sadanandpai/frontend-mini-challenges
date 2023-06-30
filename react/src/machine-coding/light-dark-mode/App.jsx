import styles from "./Theme.module.css";
import useTheme from "./hooks/useTheme";
export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <main
      className={
        theme === "dark-theme" ? styles["dark-theme"] : styles["light-theme"]
      }
    >
      <h1>Try to toggle the theme and see the change !!!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </main>
  );
}
