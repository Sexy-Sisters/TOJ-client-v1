import Link from "next/link";
import React from "react";
import { Header, Logo } from "../Header.style";
import { HamburgerButton } from "components/common";
import {
  IHeader,
  LOGO_URL,
  USER_SETTING_URL,
} from "components/layout/Header/Header.constant";
import {
  HOME_URL,
  SCHOOL_SEARCH_URL,
} from "../../../../../shared/constants/urls";
import * as S from "./HaveAuth.style";

const HaveAuthHeader = (props: IHeader) => {
  const [menuToggle, setMenuToggle] = React.useState<boolean>(false);

  return (
    <Header isFixed={props.isFixed} isTransparent={props.isTransparent}>
      <S.HeaderLogo>
        <Link href={HOME_URL}>
          <Logo src={LOGO_URL} alt="TOJ Logo" width={40} height={40} />
        </Link>

        <HamburgerButton
          state={menuToggle}
          inSize="500px"
          onClick={setMenuToggle}
        />
      </S.HeaderLogo>

      <S.Menu toggle={menuToggle}>
        <S.FuncTags>
          <Link href={SCHOOL_SEARCH_URL}>
            <S.Tag color="#FDCB6E">School search</S.Tag>
          </Link>
          <S.Tag color="black">any</S.Tag>
          <S.Tag color="black">any</S.Tag>
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
    </Header>
  );
};

export default HaveAuthHeader;
