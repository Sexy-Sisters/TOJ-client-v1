import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ThemeContext } from "../../../../../shared/contexts";
import { darkTheme } from "../../../../../shared/styles/theme";
import { HOME_URL, LOGO_URL } from "../common/Header.constant";
import { IHeader } from "../common/Header.interface";
import {
  Header,
  Logo,
  ThemeButton,
} from "components/layout/Header/common/Header.style";
import {
  SignIn,
  SignUp_button,
  Header__logo,
  Header__UI,
} from "./NoAuthHeader.style";

const SIGN_IN_URL = "";
const SIGN_UP_URL = "";

const NoAuthHeader = ({ isIntroduce }: IHeader) => {
  const router = useRouter();
  const { curTheme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <Header isIntroduce={isIntroduce}>
      <Header__logo>
        <Link href={HOME_URL}>
          <Logo src={LOGO_URL} alt="TOJ 로고" width={40} height={40} />
        </Link>
      </Header__logo>

      <Header__UI>
        <SignIn href={SIGN_IN_URL}>Sign in</SignIn>
        <SignUp_button onClick={() => router.push(SIGN_UP_URL)}>
          Sign up
        </SignUp_button>
        <ThemeButton onClick={toggleTheme}>
          {curTheme === darkTheme ? "🌝" : "🌚"}
        </ThemeButton>
      </Header__UI>
    </Header>
  );
};

export default NoAuthHeader;
