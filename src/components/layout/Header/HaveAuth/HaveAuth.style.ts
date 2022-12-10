import { Logo__block, UI__block } from "components/layout/Header/Header.style";
import Image from "next/image";
import styled from "styled-components";

const MOBILE_SIZE = "500px";

export const Header__logo = styled(Logo__block)`
  @media (max-width: ${MOBILE_SIZE}) {
    justify-content: space-between;
    width: 100%;
  }
`;

export const Menu = styled(UI__block)<{ toggle: boolean }>`
  display: flex;
  align-items: center;
  width: 95vw;

  .user-nickname {
    display: none;
  }
  & > * {
    margin: 0 30px 0 30px;
  }

  @media (max-width: ${MOBILE_SIZE}) {
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    z-index: 100;
    right: ${props => (props.toggle ? "0" : "-200px")};
    width: 200px;
    height: 100vh;
    background-color: ${props => props.theme.bgColor};
    transition: all 0.5s ease-in-out;

    .user-nickname {
      display: inline;
    }
  }
`;

export const FuncTags = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

export const UserInfoButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`;

export const Tag = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.textColor};

  &:hover {
    transition: opacity 0.2s;
    opacity: 0.7;
  }
`;

export const UserProfile = styled(Image)`
  width: 40px;
  height: auto;
  border-radius: 50%;

  @media (max-width: ${MOBILE_SIZE}) {
    width: 100px;
  }
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.textColor};
`;
