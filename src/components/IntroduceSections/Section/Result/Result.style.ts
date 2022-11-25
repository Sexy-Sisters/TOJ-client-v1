import {
  INTERVIEW_BG_COLOR,
  MOBILE_ROTATE,
  MOBILE_SIZE,
  PAD_SIZE,
  Page,
} from "../../IntroduceSections.style";
import styled from "styled-components";
import Image from "next/image";

export const ResultPage = styled(Page)`
  background: linear-gradient(
    ${INTERVIEW_BG_COLOR},
    ${props => props.theme.bgColor}
  );
  @media (max-width: ${PAD_SIZE}) {
    .victim-title {
      font-size: 40px;
    }
  }

  @media (max-width: ${MOBILE_SIZE}) {
    width: 100vh;
    transform: rotate(${MOBILE_ROTATE});

    .victim {
      justify-content: flex-start;
    }
    .victim-title {
      margin: 10px;
      font-size: 20px;
    }
    .victim-person {
      height: 70vw;
      margin: 5px 0 0 0;
    }
  }
`;

export const Victim = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .victim-title {
    animation: vibration 0.3s infinite;
  }
  .victim-person {
    animation: popUp 2s;
  }

  @keyframes vibration {
    0% {
      transform: rotate(1deg);
    }
    100% {
      transform: rotate(-1deg);
    }
  }

  @keyframes popUp {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const Victim__person = styled(Image)`
  width: auto;
  height: 450px;
  margin: 50px 0 0 0;
  border-radius: 40px;
`;

export const Victim__title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  white-space: pre-wrap;
  line-height: 1.2em;
  color: white;
`;
