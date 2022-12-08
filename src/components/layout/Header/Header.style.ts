import styled from "styled-components";
import Image from "next/image";
import { IHeader } from "./Header.constant";

export const Header = styled.header<IHeader>`
  display: flex;
  justify-content: space-between;
  position: ${props => (props.isFixed ? "fixed" : "absolute")};
  z-index: 1000;
  width: 100vw;
  height: 80px;
  background-color: ${props =>
    props.isTransparent ? "transparent" : props.theme.header};
`;

export const Logo = styled(Image)`
  width: 40px;
  height: 40px;
`;

export const UI__block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo__block = styled.div`
  display: flex;
  align-items: center;
  margin: 0 30px 0 30px;
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
