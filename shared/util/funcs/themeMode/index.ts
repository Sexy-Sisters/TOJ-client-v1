const THEME_MODE = "THEME_MODE";
const DARK = "dark";
const LIGHT = "light";

export const getThemeMode = (): boolean | null => {
  let isDark = null;
  if (typeof window !== "undefined") {
    isDark = localStorage.getItem(THEME_MODE) === DARK ? true : false;
  }
  return isDark;
};

export const setThemeMode = () => {
  const changeMode = getThemeMode() ? LIGHT : DARK;
  localStorage.setItem(THEME_MODE, changeMode);
};
