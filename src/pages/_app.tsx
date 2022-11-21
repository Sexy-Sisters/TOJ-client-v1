import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../shared/styles/global.style";
import { darkTheme, lightTheme } from "../../shared/styles/theme/theme";
import { DefaultSeo } from "next-seo";
import SEO from "../../seo.config";
import { RecoilRoot } from "recoil";
import { getThemeMode } from "../../shared/util/funcs/themeMode";

export default function App({ Component, pageProps }: AppProps) {
  const themeMode = getThemeMode() ? darkTheme : lightTheme;

  return (
    <RecoilRoot>
      <ThemeProvider theme={themeMode}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </RecoilRoot>
  );
}
