import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ThemeContext } from "../../../../../shared/contexts";
import { darkTheme } from "../../../../../shared/styles/theme";
import { HOME_URL, LOGO_URL } from "../shared/Header.constant";
import { IHeader } from "../shared/Header.interface";
import {
  Hamburger__bar,
  Header,
  Logo,
  ThemeButton,
} from "components/layout/Header/shared/Header.style";
import {
  SignIn,
  SignUp_button,
  Header__logo,
  Header__UI,
  Header__menu,
  Header__hamburger,
} from "./NoAuthHeader.style";

const SIGN_IN_URL = "";
const SIGN_UP_URL = "";

const NoAuthHeader = ({ isIntroduce }: IHeader) => {
  const router = useRouter();
  const { curTheme, toggleTheme } = React.useContext(ThemeContext);
  const [hamburgerToggle, setHamburgerToggle] = useState<boolean>(false);

  return (
    <Header isIntroduce={isIntroduce}>
      <Header__logo>
        <Link href={HOME_URL}>
          <Logo src={LOGO_URL} alt="TOJ 로고" width={40} height={40} />
        </Link>

        <Header__hamburger
          toggle={hamburgerToggle}
          onClick={() => setHamburgerToggle(cur => !cur)}
        >
          <Hamburger__bar className="bar-one" />
          <Hamburger__bar className="bar-two" />
          <Hamburger__bar className="bar-three" />
        </Header__hamburger>
      </Header__logo>

      <Header__menu toggle={hamburgerToggle}>
        <Header__UI className="header-ui">
          <SignIn href={SIGN_IN_URL}>Sign in</SignIn>
          <SignUp_button onClick={() => router.push(SIGN_UP_URL)}>
            Sign up
          </SignUp_button>
          <ThemeButton onClick={toggleTheme}>
            {curTheme === darkTheme ? "🌝" : "🌚"}
          </ThemeButton>
        </Header__UI>
      </Header__menu>
    </Header>
  );
};

export default NoAuthHeader;
