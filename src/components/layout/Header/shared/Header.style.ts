import styled from "styled-components";
import Image from "next/image";

export const Header = styled.header<{ isIntroduce: boolean }>`
  display: flex;
  justify-content: space-between;
  position: ${props => (props.isIntroduce ? "absolute" : "fixed")};
  z-index: 100;
  width: 100vw;
  height: 80px;
  background-color: ${props =>
    props.isIntroduce ? "transparent" : props.theme.bgColor};
`;

export const Logo = styled(Image)`
  width: 40px;
  height: 40px;
`;

export const UI__block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 30px;
`;

export const Logo__block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
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
