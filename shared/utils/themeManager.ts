import React from "react";
import { ThemeContext } from "shared/contexts";
import { darkTheme } from "shared/styles/theme";

const curIsDark = () => {
  const { curTheme } = React.useContext(ThemeContext);

  return curTheme === darkTheme ? true : false;
};

export default curIsDark;
