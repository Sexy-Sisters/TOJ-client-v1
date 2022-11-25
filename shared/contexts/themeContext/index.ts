import React from "react";
import { DefaultTheme } from "styled-components";
import { lightTheme } from "../../styles/theme";

interface IThemeContext {
  curTheme: DefaultTheme;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<IThemeContext>({
  curTheme: lightTheme,
  toggleTheme: () => {
    return null;
  },
});

export default ThemeContext;
