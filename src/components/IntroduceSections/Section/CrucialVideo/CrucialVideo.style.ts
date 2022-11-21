import styled from "styled-components";
import { Page } from "../../IntroduceSections.style";
import {
  MOBILE_ROTATE,
  MOBILE_SIZE,
  PAD_SIZE,
} from "../../IntroduceSections.style";

const LeverStick = styled.div`
  position: absolute;
  z-index: 1;
  width: 30px;
  height: 120px;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const CurcialVideoPage = styled(Page)`
  background-color: ${props => props.theme.bgColor};

  .video_wrapper {
    animation: popUp 2s;
  }
  .lever_wrapper {
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

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (max-width: ${PAD_SIZE}) {
    flex-direction: column;

    .video_wrapper {
      width: 100%;
      height: 70%;
      justify-content: center;

      iframe {
        width: 500px;
        height: 350px;
      }
    }
    .lever_wrapper {
      flex-direction: row;
      width: 100%;
      height: 30%;
    }
  }

  @media (max-width: ${MOBILE_SIZE}) {
    transform: rotate(${MOBILE_ROTATE});
    width: 100vh;
    flex-direction: row;

    .video_wrapper {
      height: 100vw;
      align-items: center;

      iframe {
        width: 65vh;
        height: 270px;
        margin: 50px;
      }
    }
    .lever_wrapper {
      flex-direction: column;
      height: 100vw;

      .lever_ui {
        width: 50px;
        height: 50px;
        margin: 20px;
        div {
          height: 70px;
          width: 20px;
        }
      }
    }
  }
`;

export const VideoWrapper = styled(Wrapper)`
  width: 70%;
  justify-content: flex-end;
`;

export const LeverWrapper = styled(Wrapper)`
  width: 30%;
  flex-direction: column;
`;

export const Video = styled.iframe`
  width: 750px;
  height: 450px;
  border-radius: 50px;
`;

export const LeverUI = styled.div<{ color: string }>`
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

export const RedStick = styled(LeverStick)<{ color: string }>`
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

export const BlueStick = styled(LeverStick)<{ color: string }>`
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

export const YellowStick = styled(LeverStick)<{ color: string }>`
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
