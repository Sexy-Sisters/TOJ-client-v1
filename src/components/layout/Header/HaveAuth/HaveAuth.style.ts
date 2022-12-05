import { Logo__block, UI__block } from "components/layout/Header/Header.style";
import Image from "next/image";
import styled from "styled-components";

const MOBILE_SIZE = "500px";

export const Header__logo = styled(Logo__block)`
  justify-content: space-between;
  width: 280px;
  @media (max-width: ${MOBILE_SIZE}) {
    width: 100%;
    .header-search-bar {
      display: none;
    }
    .hamburger-button {
      margin: 0 30px 0 0;
    }
  }
`;

export const Header__UI = styled(UI__block)`
  width: 120px;
  @media (max-width: ${MOBILE_SIZE}) {
    display: none;
  }
`;

const search_bar_color = "#dfe6e9";
export const SearchBar = styled.input`
  width: 200px;
  height: 40px;
  padding-left: 20px;
  padding-right: 10px;
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: ${search_bar_color};
  font-size: 16px;
  color: black;
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

const sideMenuColor = "rgba(52, 60, 66, 0.5)";
export const Header__sideMenu = styled.div<{ toggle: boolean }>`
  display: none;
  * {
    margin-top: 30px;
  }

  @media (max-width: ${MOBILE_SIZE}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 100;
    right: ${props => (props.toggle ? "0" : "-75vw")};
    width: 75vw;
    height: 100vh;
    background-color: ${sideMenuColor};
    transition: all 0.5s ease-in-out;
  }
`;
