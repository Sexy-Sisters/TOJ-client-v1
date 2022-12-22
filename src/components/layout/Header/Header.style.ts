import styled from "styled-components";
import Image from "next/image";
import { IHeader } from "./Header.constant";

export const Header = styled.header<IHeader>`
  position: ${props => (props.isFixed ? "fixed" : "absolute")};
  z-index: 1000;
  width: 100vw;
  height: 60px;
  background-color: ${props =>
    props.isTransparent ? "transparent" : props.theme.bgColor};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0 100px 0 100px;

  @media (max-width: 600px) {
    padding: 0 50px 0 50px;
  }
`;

export const Logo = styled(Image)`
  width: 50px;
  height: 50px;
`;

export const UI__block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo__block = styled.div`
  display: flex;
  align-items: center;
`;

export const ThemeButton = styled.button`
  font-size: 30px;
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
