import type { AppProps } from "next/app";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../shared/styles/global.style";
import { lightTheme } from "../../shared/styles/theme/theme";
import { DefaultSeo } from "next-seo";
import SEO from "../../seo.config";
import { RecoilRoot } from "recoil";
import { getThemeMode } from "../../shared/util/funcs/themeMode";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [curTheme, setTheme] = useState<DefaultTheme>(lightTheme);

  useEffect(() => {
    setTheme(getThemeMode());
  }, []);

  return (
    <RecoilRoot>
      <ThemeProvider theme={curTheme}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </RecoilRoot>
  );
}
