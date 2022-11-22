import { DefaultTheme } from "styled-components";
import { darkTheme, lightTheme } from "../../../styles/theme/theme";

const THEME_KEY = "theme";
const DARK = "dark";
const LIGHT = "light";

export const getThemeMode = (): DefaultTheme => {
  return localStorage.getItem(THEME_KEY) === DARK ? darkTheme : lightTheme;
};

export const setThemeMode = () => {
  const changeTheme = getThemeMode() === darkTheme ? LIGHT : DARK;
  localStorage.setItem(THEME_KEY, changeTheme);
};
