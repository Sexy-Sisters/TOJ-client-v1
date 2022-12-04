import styled from "styled-components";

export const Hamburger = styled.button<{
  state: boolean;
  reWidth: string;
}>`
  display: none;
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media (max-width: ${props => props.reWidth}) {
    display: block;
    position: relative;
    z-index: 200;
  }

  .bar-one {
    animation: ${props =>
      props.state ? "one 0.7s forwards" : "one-back 0.7s forwards"};
  }
  .bar-two {
    animation: ${props =>
      props.state ? "two 0.7s forwards" : "two-back 0.7s forwards"};
  }
  .bar-three {
    animation: ${props =>
      props.state ? "three 0.7s forwards" : "three-back 0.7s forwards"};
  }
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
