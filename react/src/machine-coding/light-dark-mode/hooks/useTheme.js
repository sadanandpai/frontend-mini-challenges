import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) setTheme(theme);
  }, []);

  useEffect(() => {
    // If you want to apply css to your app directly use below code
    // to apply it on root element
    // styles should be in app.css file
    // document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "dark-theme") setTheme("light-theme");
    else setTheme("dark-theme");
  };

  return { theme, toggleTheme };
};

export default useTheme;
