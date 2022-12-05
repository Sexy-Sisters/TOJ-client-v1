import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ThemeContext } from "../../../../../shared/contexts";
import { darkTheme } from "../../../../../shared/styles/theme";
import { IHeader, LOGO_URL } from "../Header.constant";
import {
  Header,
  Logo,
  ThemeButton,
} from "components/layout/Header/Header.style";
import {
  SignIn,
  SignUp_button,
  Header__logo,
  Header__UI,
  Header__menu,
} from "./NoAuthHeader.style";
import { HamburgerButton } from "components/common";

const SIGN_IN_URL = "/auth/signIn";
const SIGN_UP_URL = "/auth/signUp";

const NoAuthHeader = (props: IHeader) => {
  const { push } = useRouter();
  const { curTheme, toggleTheme } = React.useContext(ThemeContext);
  const [menuToggle, setMenuToggle] = React.useState<boolean>(false);

  return (
    <Header isFixed={props.isFixed} isTransparent={props.isTransparent}>
      <Header__logo>
        <Link href={"/"}>
          <Logo src={LOGO_URL} alt="TOJ 로고" width={40} height={40} />
        </Link>

        <HamburgerButton
          state={menuToggle}
          reWidth="450px"
          onClick={setMenuToggle}
        />
      </Header__logo>

      <Header__menu toggle={menuToggle}>
        <Header__UI className="header-ui">
          <SignIn href={SIGN_IN_URL}>Sign in</SignIn>
          <SignUp_button onClick={() => push(SIGN_UP_URL)}>
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
