import { Logo__block, UI__block } from "components/layout/Header/Header.style";
import Image from "next/image";
import styled from "styled-components";

const MOBILE_SIZE = "800px";

export const HeaderLogo = styled(Logo__block)`
  margin-right: 70px;

  .hamburger-button {
    width: 30px;
  }

  @media (max-width: ${MOBILE_SIZE}) {
    justify-content: space-between;
    width: 100%;
    margin: 0;
  }
`;

export const Menu = styled(UI__block)<{ toggle: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: ${MOBILE_SIZE}) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
    position: absolute;
    z-index: 100;
    right: ${props => (props.toggle ? "0" : "-250px")};
    width: 250px;
    height: 100vh;
    background-color: ${props => props.theme.bgColor};
    transition: all 0.5s ease-in-out;
  }
`;

export const FuncTags = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;

  @media (max-width: ${MOBILE_SIZE}) {
    flex-direction: column;
    width: 100%;
    height: 150px;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${MOBILE_SIZE}) {
    flex-direction: column;
    height: 150px;
  }
`;

export const Tag = styled.p`
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
  border-radius: 6px;
  color: ${props => props.theme.textColor};
  transition: none;

  &:hover {
    background-color: ${props => props.theme.block};
  }

  @media (max-width: ${MOBILE_SIZE}) {
    font-size: 16px;
  }
`;

export const UserProfile = styled(Image)`
  width: 30px;
  height: auto;
  border-radius: 50%;

  @media (max-width: ${MOBILE_SIZE}) {
    width: 80px;
  }
`;

export const UserName = styled.p`
  display: none;
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.textColor};

  @media (max-width: ${MOBILE_SIZE}) {
    display: inline;
  }
`;
