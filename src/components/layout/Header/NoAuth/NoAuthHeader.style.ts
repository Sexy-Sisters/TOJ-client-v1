import { Logo__block, UI__block } from "components/layout/Header/Header.style";
import Link from "next/link";
import styled from "styled-components";

export const Header__logo = styled(Logo__block)``;

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
  padding: 10px;
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
