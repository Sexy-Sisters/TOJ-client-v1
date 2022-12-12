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
import * as S from "./NoAuthHeader.style";
import { HamburgerButton } from "components/common";
import {
  HOME_URL,
  SIGN_IN_URL,
  SIGN_UP_URL,
} from "../../../../../shared/constants/urls";

const NoAuthHeader = (props: IHeader) => {
  const { curTheme, toggleTheme } = React.useContext(ThemeContext);
  const [menuToggle, setMenuToggle] = React.useState<boolean>(false);
  const { push } = useRouter();

  return (
    <Header isFixed={props.isFixed} isTransparent={props.isTransparent}>
      <S.Header__logo>
        <Link href={HOME_URL}>
          <Logo src={LOGO_URL} alt="TOJ 로고" width={40} height={40} />
        </Link>

        <HamburgerButton
          state={menuToggle}
          inSize="500px"
          onClick={setMenuToggle}
        />
      </S.Header__logo>

      <S.Header__menu toggle={menuToggle}>
        <S.Header__UI className="header-ui">
          <S.SignIn href={SIGN_IN_URL} className="header-button">
            Sign in
          </S.SignIn>
          <S.SignUp_button
            onClick={() => push(SIGN_UP_URL)}
            className="header-button"
          >
            Sign up
          </S.SignUp_button>
          <ThemeButton onClick={toggleTheme} className="header-button">
            {curTheme === darkTheme ? "🌝" : "🌚"}
          </ThemeButton>
        </S.Header__UI>
      </S.Header__menu>
    </Header>
  );
};

export default NoAuthHeader;
