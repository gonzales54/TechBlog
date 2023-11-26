import { useTheme } from "next-themes";

const useDarkMode = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return {
    theme,
    handleTheme,
  };
};

export default useDarkMode;
