import styled from "styled-components";
import { Page } from "../../IntroducePage.style";
import {
  MOBILE_ROTATE,
  MOBILE_SIZE,
  PAD_SIZE,
} from "../../IntroducePage.constant";

const LeverStick = styled.div`
  position: absolute;
  z-index: 1;
  width: 30px;
  height: 120px;
  border-radius: 10px;
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const CurcialVideoPage = styled(Page)`
  display: flex;
  background-color: ${props => props.theme.bgColor};

  @media (max-width: ${PAD_SIZE}) {
    flex-direction: column;

    .video-block {
      justify-content: center;
      width: 100%;
      height: 70%;

      iframe {
        width: 500px;
        height: 350px;
      }
    }
    .lever-block {
      flex-direction: row;
      width: 100%;
      height: 30%;
    }
  }

  @media (max-width: ${MOBILE_SIZE}) {
    flex-direction: row;
    width: 100vh;
    transform: rotate(${MOBILE_ROTATE});

    .video-block {
      align-items: center;
      height: 100vw;

      iframe {
        width: 65vh;
        height: 270px;
        margin: 50px;
      }
    }
    .lever-block {
      flex-direction: column;
      height: 100vw;

      .lever {
        width: 50px;
        height: 50px;
        margin: 20px;
        div {
          width: 20px;
          height: 70px;
        }
      }
    }
  }

  .video-block {
    animation: popUp 2s;
  }
  .lever-block {
    animation: rightMove 2s;
  }

  @keyframes popUp {
    0% {
      transform: scale(0.6);
    }
    50% {
      transform: scale(1);
    }
    70% {
      transform: scale(0.95);
    }
  }

  @keyframes rightMove {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const Video__block = styled(Block)`
  width: 70%;
  justify-content: flex-end;
`;

export const Lever__block = styled(Block)`
  width: 30%;
  flex-direction: column;
`;

export const Video = styled.iframe`
  width: 750px;
  height: 450px;
  border-radius: 50px;
`;

export const Lever = styled.div<{ color: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 30px;
  background-color: ${props => props.color};
`;

export const Lever__redStick = styled(LeverStick)<{ color: string }>`
  background-color: ${props => props.color};
  animation: lotate 2s linear infinite alternate;

  @keyframes lotate {
    0% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
`;

export const Lever__blueStick = styled(LeverStick)<{ color: string }>`
  background-color: ${props => props.color};
  animation: lotate 4s linear infinite alternate;

  @keyframes lotate {
    0% {
      transform: rotate(-90deg);
    }
    100% {
      transform: rotate(-250deg);
    }
  }
`;

export const Lever__yellowStick = styled(LeverStick)<{ color: string }>`
  background-color: ${props => props.color};
  animation: lotate 8s linear infinite alternate;

  @keyframes lotate {
    0% {
      transform: rotate(50deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
`;

export const VideoTtile = styled.h1`
  display: none;
  font-size: 30px;
  color: ${props => props.theme.textColor};
`;
