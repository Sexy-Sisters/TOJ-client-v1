import {
  Hamburger,
  Logo__block,
  UI__block,
} from "components/layout/Header/shared/Header.style";
import Link from "next/link";
import styled from "styled-components";

const MOBILE_SIZE = "450px";

export const Header__logo = styled(Logo__block)`
  @media (max-width: ${MOBILE_SIZE}) {
    width: 100%;
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

export const Header__menu = styled.div<{ toggle: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: ${MOBILE_SIZE}) {
    position: absolute;
    z-index: 100;
    right: ${props => (props.toggle ? "0" : "-50vw")};
    width: 50vw;
    height: 100vh;
    background-color: ${props => props.theme.sideMenu};
    transition: all 0.5s ease-in-out;

    .header-ui {
      height: 300px;
      flex-direction: column;
      margin: 0;
    }
  }
`;

export const Header__hamburger = styled(Hamburger)<{ toggle: boolean }>`
  display: none;

  @media (max-width: ${MOBILE_SIZE}) {
    display: block;
    position: relative;
    z-index: 200;
    margin: 0 30px 0 0;
  }

  .bar-one {
    animation: ${props =>
      props.toggle ? "one 0.7s forwards" : "one-back 0.7s forwards"};
  }
  .bar-two {
    animation: ${props =>
      props.toggle ? "two 0.7s forwards" : "two-back 0.7s forwards"};
  }
  .bar-three {
    animation: ${props =>
      props.toggle ? "three 0.7s forwards" : "three-back 0.7s forwards"};
  }
`;
