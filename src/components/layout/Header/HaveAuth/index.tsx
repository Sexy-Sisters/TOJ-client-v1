import Link from "next/link";
import React from "react";
import { ThemeContext } from "../../../../../shared/contexts";
import { darkTheme } from "../../../../../shared/styles/theme";
import { Header, Logo, ThemeButton } from "../Header.style";
import {
  IHeader,
  LOGO_URL,
  USER_SETTING_URL,
} from "components/layout/Header/Header.constant";
import {
  Header__logo,
  SearchBar,
  UserProfile,
  Header__sideMenu,
  UserName,
  Header__UI,
} from "./HaveAuth.style";
import { HamburgerButton } from "components/common";
import { HOME_URL } from "../../../../../shared/constants";

const HaveAuthHeader = (props: IHeader) => {
  const { curTheme, toggleTheme } = React.useContext(ThemeContext);
  const [menuToggle, setMenuToggle] = React.useState<boolean>(false);

  return (
    <Header isFixed={props.isFixed} isTransparent={props.isTransparent}>
      <Header__logo>
        <Link href={HOME_URL}>
          <Logo src={LOGO_URL} alt="TOJ 로고" width={40} height={40} />
        </Link>

        <SearchBar
          className="header-search-bar"
          type="search"
          placeholder="학교를 검색 해보자! 🧑‍💻"
        />

        <HamburgerButton
          state={menuToggle}
          reWidth="500px"
          onClick={setMenuToggle}
        />
      </Header__logo>

      <Header__UI>
        <ThemeButton className="theme-button" onClick={toggleTheme}>
          {curTheme === darkTheme ? "🌝" : "🌚"}
        </ThemeButton>

        <Link href={USER_SETTING_URL}>
          <UserProfile
            src="/image/user_profile.jpeg"
            alt="사용자 프로필"
            width={40}
            height={40}
          />
        </Link>
      </Header__UI>

      <Header__sideMenu toggle={menuToggle}>
        <UserProfile
          src="/image/user_profile.jpeg"
          alt="사용자 프로필"
          width={40}
          height={40}
        />
        <UserName>유저 닉네임</UserName>
        <ThemeButton className="theme-button" onClick={toggleTheme}>
          {curTheme === darkTheme ? "🌝" : "🌚"}
        </ThemeButton>
        <SearchBar type="search" placeholder="학교를 검색 해보자! 🧑‍💻" />
      </Header__sideMenu>
    </Header>
  );
};

export default HaveAuthHeader;
