import Link from "next/link";
import React from "react";
import { Header, Logo } from "../Header.style";
import {
  IHeader,
  LOGO_URL,
  USER_SETTING_URL,
} from "components/layout/Header/Header.constant";
import { Header__logo, UserProfile, UserName, Menu } from "./HaveAuth.style";
import { HamburgerButton } from "components/common";
import { HOME_URL } from "../../../../../shared/constants";

const HaveAuthHeader = (props: IHeader) => {
  const [menuToggle, setMenuToggle] = React.useState<boolean>(false);

  return (
    <Header isFixed={props.isFixed} isTransparent={props.isTransparent}>
      <Header__logo>
        <Link href={HOME_URL}>
          <Logo src={LOGO_URL} alt="TOJ 로고" width={40} height={40} />
        </Link>

        <HamburgerButton
          state={menuToggle}
          inSize="500px"
          onClick={setMenuToggle}
        />
      </Header__logo>

      <Menu toggle={menuToggle}>
        <Link href={USER_SETTING_URL}>
          <UserProfile
            src="/image/user_profile.jpeg"
            alt="사용자 프로필 이미지"
            width={40}
            height={40}
          />
        </Link>

        <UserName className="user-nickname">유저 닉네임</UserName>
      </Menu>
    </Header>
  );
};

export default HaveAuthHeader;
