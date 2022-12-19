import Link from "next/link";
import React from "react";
import { HamburgerButton } from "components/common";
import {
  IHeader,
  LOGO_DARK_URL,
  LOGO_LIGHT_URL,
  USER_SETTING_URL,
} from "components/layout/Header/Header.constant";
import {
  HOME_URL,
  INTRODUCE_URL,
  SCHOOL_SEARCH_URL,
} from "shared/constants/urls";
import { ThemeContext } from "shared/contexts";
import * as C from "../Header.style";
import * as S from "./HaveAuth.style";
import { darkTheme } from "shared/styles/theme";

const HaveAuthHeader = (props: IHeader) => {
  const { curTheme } = React.useContext(ThemeContext);
  const [menuToggle, setMenuToggle] = React.useState<boolean>(false);

  return (
    <C.Header isFixed={props.isFixed} isTransparent={props.isTransparent}>
      <C.HeaderContainer>
        <S.HeaderLogo>
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
            inSize="800px"
            onClick={setMenuToggle}
          />
        </S.HeaderLogo>

        <S.Menu toggle={menuToggle}>
          <S.FuncTags>
            <Link href={SCHOOL_SEARCH_URL}>
              <S.Tag>School search</S.Tag>
            </Link>
            <Link href={INTRODUCE_URL}>
              <S.Tag>Introduce TOJ</S.Tag>
            </Link>
            <S.Tag>any</S.Tag>
          </S.FuncTags>

          <S.UserInfoWrapper>
            <Link href={USER_SETTING_URL}>
              <S.UserProfile
                src="/image/user_profile.jpeg"
                alt="User Profile Image"
                width={40}
                height={40}
              />
            </Link>

            <S.UserName>User Nickname</S.UserName>
          </S.UserInfoWrapper>
        </S.Menu>
      </C.HeaderContainer>
    </C.Header>
  );
};

export default HaveAuthHeader;
