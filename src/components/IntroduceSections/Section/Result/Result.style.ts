import {
  INTERVIEW_BG_COLOR,
  MOBILE_ROTATE,
  MOBILE_SIZE,
  PAD_SIZE,
  Page,
} from "components/IntroduceSections/IntroduceSections.style";
import styled from "styled-components";

export const ResultPage = styled(Page)`
  background: linear-gradient(
    ${INTERVIEW_BG_COLOR},
    ${props => props.theme.bgColor}
  );
  @media (max-width: ${PAD_SIZE}) {
    .title {
      font-size: 40px;
    }
  }

  @media (max-width: ${MOBILE_SIZE}) {
    transform: rotate(${MOBILE_ROTATE});
    width: 100vh;

    .wrapper {
      justify-content: flex-start;
    }
    .title {
      font-size: 20px;
      margin: 10px;
    }
    .victim {
      height: 70vw;
      margin: 5px 0 0 0;
    }
  }
`;

export const VictimWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .title {
    animation: vibration 0.3s infinite;
  }
  .victim {
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

export const Person = styled.img`
  width: auto;
  height: 450px;
  border-radius: 40px;
  margin: 50px 0 0 0;
`;

export const ResultTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  white-space: pre-wrap;
  line-height: 1.2em;
  color: white;
`;
