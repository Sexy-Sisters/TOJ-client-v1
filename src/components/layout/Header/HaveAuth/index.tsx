import Link from "next/link";
import React from "react";
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
import * as C from "../Header.style";
import * as S from "./HaveAuth.style";

const HaveAuthHeader = (props: IHeader) => {
  const [menuToggle, setMenuToggle] = React.useState<boolean>(false);

  return (
    <C.Header isFixed={props.isFixed} isTransparent={props.isTransparent}>
      <C.HeaderContainer>
        <S.HeaderLogo>
          <Link href={HOME_URL}>
            <C.Logo src={LOGO_URL} alt="TOJ Logo" width={40} height={40} />
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
            <S.Tag>any</S.Tag>
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
