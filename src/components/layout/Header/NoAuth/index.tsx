import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ThemeContext } from "../../../../../shared/contexts";
import { darkTheme } from "../../../../../shared/styles/theme";
import { IHeader, LOGO_DARK_URL, LOGO_LIGHT_URL } from "../Header.constant";
import { HamburgerButton } from "components/common";
import {
  HOME_URL,
  SIGN_IN_URL,
  SIGN_UP_URL,
} from "../../../../../shared/constants/urls";
import * as C from "components/layout/Header/Header.style";
import * as S from "./NoAuthHeader.style";

const NoAuthHeader = (props: IHeader) => {
  const { curTheme, toggleTheme } = React.useContext(ThemeContext);
  const [menuToggle, setMenuToggle] = React.useState<boolean>(false);
  const { push } = useRouter();

  return (
    <C.Header isFixed={props.isFixed} isTransparent={props.isTransparent}>
      <C.HeaderContainer>
        <S.Header__logo>
          <Link href={HOME_URL}>
            <C.Logo
              src={curTheme === darkTheme ? LOGO_DARK_URL : LOGO_LIGHT_URL}
              alt="TOJ logo"
              width={50}
              height={50}
            />
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
            <C.ThemeButton onClick={toggleTheme} className="header-button">
              {curTheme === darkTheme ? "🌝" : "🌚"}
            </C.ThemeButton>
          </S.Header__UI>
        </S.Header__menu>
      </C.HeaderContainer>
    </C.Header>
  );
};

export default NoAuthHeader;
