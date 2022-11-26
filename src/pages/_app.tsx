import React from "react";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../../shared/styles/global.style";
import { DefaultSeo } from "next-seo";
import SEO from "../../seo.config";
import { useTheme } from "../../shared/hooks";
import { ThemeContext } from "../../shared/contexts";
import { ThemeProvider } from "styled-components";
import { NextPageWithLayout } from "../../shared/interfaces/page";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page);
  const { curTheme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ curTheme, toggleTheme }}>
      <ThemeProvider theme={curTheme}>
        <DefaultSeo {...SEO} />
        <GlobalStyle />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
