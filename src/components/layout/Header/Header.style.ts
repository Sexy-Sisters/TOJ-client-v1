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
  transition: all linear 0.3s;

  &:hover {
    animation: rotateBtn 1s linear infinite;
  }

  @keyframes rotateBtn {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
