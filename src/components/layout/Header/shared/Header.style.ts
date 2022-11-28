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
    props.isIntroduce ? "transparent" : props.theme.header};
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

export const Hamburger = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const Hamburger__bar = styled.div`
  width: 100%;
  height: 5px;
  margin: 6px auto;
  border-radius: 3px;
  transition: 0.7s;
  background-color: ${props => props.theme.textColor};

  @keyframes one {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
    50% {
      transform: translate3d(0, 10px, 0) rotate(0);
    }
    100% {
      transform: translate3d(0, 10px, 0) rotate(45deg);
    }
  }

  @keyframes one-back {
    0% {
      transform: translate3d(0, 10px, 0) rotate(45deg);
    }
    50% {
      transform: translate3d(0, 10px, 0) rotate(0);
    }
    100% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
  }

  @keyframes two {
    0% {
      transform: scale(1);
      opacity: 1;
      margin: 10px 0 10px;
    }
    100% {
      transform: scale(0);
      opacity: 0;
      margin: 0;
    }
  }

  @keyframes two-back {
    0% {
      transform: scale(0);
      opacity: 0;
      margin: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
      margin: 7px 0 7px;
    }
  }

  @keyframes three {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
    50% {
      transform: translate3d(0, -10px, 0) rotate(0);
    }
    100% {
      transform: translate3d(0, -12px, 0) rotate(-45deg);
    }
  }

  @keyframes three-back {
    0% {
      transform: translate3d(0, -10px, 0) rotate(-45deg);
    }
    50% {
      transform: translate3d(0, -10px, 0) rotate(0);
    }
    100% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
  }
`;
