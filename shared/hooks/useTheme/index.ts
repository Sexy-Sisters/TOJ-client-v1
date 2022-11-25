import React from "react";
import { DefaultTheme } from "styled-components";
import { darkTheme, lightTheme } from "../../styles/theme";

const THEME_KEY = "theme";
const DARK: string = "dark";
const LIGHT: string = "light";

interface IUseTheme {
  (): { curTheme: DefaultTheme; toggleTheme: () => void };
}

const useTheme: IUseTheme = () => {
  const [curTheme, setTheme] = React.useState<DefaultTheme>(lightTheme);

  const setMode = (themeMode: DefaultTheme, mode: string) => {
    localStorage.setItem(THEME_KEY, mode);
    setTheme(themeMode);
  };

  const toggleTheme = () => {
    curTheme === lightTheme
      ? setMode(darkTheme, DARK)
      : setMode(lightTheme, LIGHT);
  };

  React.useEffect(() => {
    const localTheme: string | null = localStorage.getItem(THEME_KEY);

    if (localTheme !== null) {
      if (localTheme === DARK) {
        setTheme(darkTheme);
      } else {
        setTheme(lightTheme);
      }
    }
  }, []);

  return { curTheme, toggleTheme };
};

export default useTheme;
