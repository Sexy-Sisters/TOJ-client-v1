import React from "react";
import * as C from "../Header.style";
import * as S from "./Auth.style";
import Link from "next/link";
import { HamburgerButton } from "components/common";
import {
  IHeader,
  LOGO_DARK_URL,
  LOGO_LIGHT_URL,
} from "components/layout/Header/Header.constant";
import {
  HOME_URL,
  INTRODUCE_URL,
  SCHOOL_SEARCH_URL,
  USER_SETTING_URL,
} from "shared/constants/urls";
import {
  get_userProfile,
  IUserProfile,
  IUserProfileResponse,
} from "shared/utils/userManager";
import curIsDark from "shared/utils/themeManager";

const DEFAULT_USER: IUserProfile = {
  nickname: "로그인 하자",
  profileImg: "",
};

const AuthHeader = (props: IHeader) => {
  const [menuToggle, setMenuToggle] = React.useState<boolean>(false);
  const [userProfile, setUserProfile] =
    React.useState<IUserProfile>(DEFAULT_USER);

  React.useEffect(() => {
    async function getUserProfile() {
      try {
        const { data: res } = (await get_userProfile()) as IUserProfileResponse;

        if (res.result === "SUCCESS") {
          setUserProfile({
            nickname: res.data.nickname,
            profileImg: res.data.profileImg,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
    getUserProfile();
  }, []);

  return (
    <C.Header isFixed={props.isFixed} isTransparent={props.isTransparent}>
      <C.HeaderContainer>
        <S.HeaderLogo>
          <Link href={HOME_URL}>
            <C.Logo
              src={curIsDark() ? LOGO_DARK_URL : LOGO_LIGHT_URL}
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
              <S.Tag>학교 검색</S.Tag>
            </Link>
            <Link href={INTRODUCE_URL}>
              <S.Tag>TOJ 개발 동기</S.Tag>
            </Link>
            <Link href={""}>
              <S.Tag>등교</S.Tag>
            </Link>
          </S.FuncTags>

          <S.UserInfoWrapper>
            <Link href={USER_SETTING_URL}>
              <S.UserProfile
                src={userProfile.profileImg}
                alt="사용자 프로필 이미지"
                width={30}
                height={30}
              />
            </Link>

            <S.UserName>{userProfile.nickname}</S.UserName>
          </S.UserInfoWrapper>
        </S.Menu>
      </C.HeaderContainer>
    </C.Header>
  );
};

export default AuthHeader;
