import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const Header__block = styled.header`
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 100;
  width: 100vw;
  height: 80px;
`;

export const Logo__block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
`;

export const Logo = styled(Image)`
  width: 40px;
  height: 40px;
`;

export const UI__block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
`;

export const SignLink = styled(Link)`
  font-size: 20px;
  opacity: 0.5;
  white-space: nowrap;
  color: ${props => props.theme.textColor};

  &:hover {
    transition: all 0.5s;
    opacity: 1;
  }
`;

export const SignUp_button = styled.button`
  padding: 10px;
  border: solid 3px ${props => props.theme.textColor};
  border-radius: 20px;
  white-space: nowrap;
  color: ${props => props.theme.textColor};

  &:hover {
    transition: all 0.5s;
    background-color: ${props => props.theme.textColor};
    color: ${props => props.theme.bgColor};
  }
`;

export const ThemeButton = styled.button`
  font-size: 30px;
`;

export const LangButton = styled.button`
  font-size: 30px;
`;
