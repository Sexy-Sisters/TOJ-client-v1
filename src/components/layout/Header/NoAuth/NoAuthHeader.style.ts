import { Logo__block, UI__block } from "components/layout/Header/Header.style";
import Link from "next/link";
import styled from "styled-components";

const MOBILE_SIZE = "450px";

export const Header__logo = styled(Logo__block)`
  @media (max-width: ${MOBILE_SIZE}) {
    width: 100%;
    .hamburger-button {
      margin: 0 30px 0 0;
    }
  }
`;

export const Header__UI = styled(UI__block)`
  width: 250px;
`;

export const SignIn = styled(Link)`
  font-size: 20px;
  opacity: 0.5;
  white-space: nowrap;
  transition: all linear 0.3s;
  color: ${props => props.theme.textColor};

  &:hover {
    opacity: 1;
  }
`;

export const SignUp_button = styled.button`
  width: 100px;
  height: 40px;
  border: solid 3px ${props => props.theme.textColor};
  border-radius: 20px;
  white-space: nowrap;
  transition: all linear 0.3s;
  color: ${props => props.theme.textColor};

  &:hover {
    background-color: ${props => props.theme.textColor};
    color: ${props => props.theme.bgColor};
  }
`;

const sideMenuColor = "rgba(52, 60, 66, 0.5)";
export const Header__menu = styled.div<{ toggle: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: ${MOBILE_SIZE}) {
    position: absolute;
    z-index: 100;
    right: ${props => (props.toggle ? "0" : "-50vw")};
    width: 50vw;
    height: 100vh;
    background-color: ${sideMenuColor};
    transition: all 0.5s ease-in-out;

    .header-ui {
      flex-direction: column;
      height: 300px;
      margin: 0;
    }
  }
`;
