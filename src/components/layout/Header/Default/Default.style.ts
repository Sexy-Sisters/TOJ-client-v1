import { Logo__block, UI__block } from "components/layout/Header/Header.style";
import Link from "next/link";
import styled from "styled-components";

const MOBILE_SIZE = "500px";

export const Header__logo = styled(Logo__block)`
  @media (max-width: ${MOBILE_SIZE}) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const Header__UI = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 260px;
`;

export const SignIn = styled(Link)`
  font-size: 14px;
  opacity: 0.5;
  white-space: nowrap;
  transition: all linear 0.3s;
  color: ${props => props.theme.textColor};

  &:hover {
    opacity: 1;
  }
`;

export const SignUp_button = styled.button`
  width: 80px;
  height: 35px;
  border: solid 2.5px ${props => props.theme.textColor};
  border-radius: 10px;
  white-space: nowrap;
  font-size: 14px;
  transition: all linear 0.2s;
  color: ${props => props.theme.textColor};

  &:hover {
    background-color: ${props => props.theme.textColor};
    color: ${props => props.theme.bgColor};
  }
`;

export const Header__menu = styled.div<{ toggle: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: ${MOBILE_SIZE}) {
    position: absolute;
    z-index: 100;
    right: ${props => (props.toggle ? "0" : "-150px")};
    width: 150px;
    height: 100vh;
    background-color: ${p => p.theme.headerSidebar};
    transition: right 0.5s ease-in-out;

    .header-ui {
      flex-direction: column;
      height: 200px;
      margin: 0;
    }
  }
`;

export const ThemeButton = styled.button`
  font-size: 25px;
  border-radius: 50%;

  &:hover {
    animation: pop 0.6s;
  }

  @keyframes pop {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
