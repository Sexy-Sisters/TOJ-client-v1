import Link from "next/link";
import { Header, Logo, ThemeButton } from "../shared/Header.style";
import React from "react";
import { ThemeContext } from "../../../../../shared/contexts";
import { darkTheme } from "../../../../../shared/styles/theme";
import { IHeader } from "../shared/Header.interface";
import {
  HOME_URL,
  LOGO_URL,
  USER_SETTING_URL,
} from "components/layout/Header/shared/Header.constant";
import {
  Header__logo,
  Header__UI,
  SearchBar,
  UserProfile,
} from "./HaveAuth.style";

const HaveAuthHeader = ({ isIntroduce }: IHeader) => {
  const { curTheme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <Header isIntroduce={isIntroduce}>
      <Header__logo>
        <Link href={HOME_URL}>
          <Logo src={LOGO_URL} alt="TOJ 로고" width={40} height={40} />
        </Link>

        <SearchBar type="search" placeholder="학교를 검색 해보자! 🧑‍💻" />
      </Header__logo>

      <Header__UI>
        <ThemeButton onClick={toggleTheme}>
          {curTheme === darkTheme ? "🌝" : "🌚"}
        </ThemeButton>

        <Link href={USER_SETTING_URL}>
          <UserProfile
            src={"/image/user_profile.jpeg"}
            alt="사용자 프로필"
            width={40}
            height={40}
          />
        </Link>
      </Header__UI>
    </Header>
  );
};

export default HaveAuthHeader;
