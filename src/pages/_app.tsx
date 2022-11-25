import type { AppProps } from "next/app";
import { GlobalStyle } from "../../shared/styles/global.style";
import { DefaultSeo } from "next-seo";
import SEO from "../../seo.config";
import { useTheme } from "../../shared/hooks";
import { ThemeContext } from "../../shared/contexts";
import { ThemeProvider } from "styled-components";

const App = ({ Component, pageProps }: AppProps) => {
  const { curTheme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ curTheme, toggleTheme }}>
      <ThemeProvider theme={curTheme}>
        <DefaultSeo {...SEO} />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
