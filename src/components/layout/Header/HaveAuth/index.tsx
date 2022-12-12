import Link from "next/link";
import React from "react";
import { Header, Logo } from "../Header.style";
import {
  IHeader,
  LOGO_URL,
  USER_SETTING_URL,
} from "components/layout/Header/Header.constant";
import { HamburgerButton } from "components/common";
import { HOME_URL, SCHOOL_SEARCH } from "../../../../../shared/constants/urls";
import * as S from "./HaveAuth.style";

const HaveAuthHeader = (props: IHeader) => {
  const [menuToggle, setMenuToggle] = React.useState<boolean>(false);

  return (
    <Header isFixed={props.isFixed} isTransparent={props.isTransparent}>
      <S.Header__logo>
        <Link href={HOME_URL}>
          <Logo src={LOGO_URL} alt="TOJ Logo" width={40} height={40} />
        </Link>

        <HamburgerButton
          state={menuToggle}
          inSize="500px"
          onClick={setMenuToggle}
        />
      </S.Header__logo>

      <S.Menu toggle={menuToggle}>
        <S.FuncTags>
          <Link href={SCHOOL_SEARCH}>
            <S.Tag>School search</S.Tag>
          </Link>
          <S.Tag>any</S.Tag>
          <S.Tag>any</S.Tag>
        </S.FuncTags>

        <S.UserInfoButtons>
          <p>🔔</p>

          <Link href={USER_SETTING_URL}>
            <S.UserProfile
              src="/image/user_profile.jpeg"
              alt="User Profile Image"
              width={40}
              height={40}
            />
          </Link>

          <S.UserName className="user-nickname">User Nickname</S.UserName>
        </S.UserInfoButtons>
      </S.Menu>
    </Header>
  );
};

export default HaveAuthHeader;
