import styled from "styled-components";
import {
  MOBILE_ROTATE,
  MOBILE_SIZE,
  PAD_SIZE,
  Page,
} from "../../IntroduceSections.style";

export const EndTOJPage = styled(Page)`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.bgColor};

  @media (max-width: ${MOBILE_SIZE}) {
    transform: rotate(${MOBILE_ROTATE});
    flex-direction: row;
    width: 100vh;
  }
`;

export const Title__box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  @media (max-width: ${MOBILE_SIZE}) {
    margin-left: 5vh;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  color: ${props => props.theme.textColor};

  @media (max-width: ${PAD_SIZE}) {
    font-size: 4.5vw;
  }
  @media (max-width: ${MOBILE_SIZE}) {
    font-size: 3.5vh;
    white-space: pre-wrap;
    line-height: 5vh;
  }
`;

export const Content__box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;

  @media (max-width: ${PAD_SIZE}) {
    justify-content: flex-start;
    margin-left: 10vw;
  }
  @media (max-width: ${MOBILE_SIZE}) {
    height: 100vw;
  }
`;

export const ContentText = styled.h2`
  white-space: nowrap;
  font-weight: bold;
  font-size: 80px;
  color: ${props => props.theme.textColor};

  @media (max-width: ${PAD_SIZE}) {
    font-size: 60px;
  }
  @media (max-width: ${MOBILE_SIZE}) {
    font-size: 50px;
  }
`;

export const Content__wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 90%;
  width: 60%;

  @media (max-width: ${MOBILE_SIZE}) {
    height: 70%;
    justify-content: space-between;
  }
`;

export const StrongText = styled.strong<{ color: string }>`
  text-transform: uppercase;
  color: ${props => props.color};
`;

export const Word = styled.p`
  font-weight: bold;
  font-size: 80px;
  white-space: nowrap;
  color: ${props => props.theme.textColor};

  @media (max-width: ${PAD_SIZE}) {
    font-size: 60px;
  }
  @media (max-width: ${MOBILE_SIZE}) {
    font-size: 50px;
  }
`;

export const WordBox = styled.div`
  position: absolute;
  left: 80px;
  bottom: 0;
  height: 100px;
  overflow: hidden;

  & p:first-child {
    animation: showPC 6s ease-out infinite;
  }
  & > p {
    margin-bottom: 50px;
  }

  @media (max-width: ${PAD_SIZE}) {
    left: 60px;
    bottom: -10px;
    & p:first-child {
      animation: showPAD 6s ease-out infinite;
    }
  }

  @media (max-width: ${MOBILE_SIZE}) {
    left: 50px;
    bottom: -50px;
    & p:first-child {
      animation: showMOBILE 6s ease-out infinite;
    }
  }

  @keyframes showPC {
    0% {
      margin-top: -440px;
    }
    5% {
      margin-top: -260px;
    }
    33% {
      margin-top: -260px;
    }
    38% {
      margin-top: -130px;
    }
    66% {
      margin-top: -130px;
    }
    71% {
      margin-top: 0px;
    }
    99.99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -440px;
    }
  }

  @keyframes showPAD {
    0% {
      margin-top: -330px;
    }
    5% {
      margin-top: -220px;
    }
    33% {
      margin-top: -220px;
    }
    38% {
      margin-top: -110px;
    }
    66% {
      margin-top: -110px;
    }
    71% {
      margin-top: 0px;
    }
    99.99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -330px;
    }
  }

  @keyframes showMOBILE {
    0% {
      margin-top: -300px;
    }
    5% {
      margin-top: -200px;
    }
    33% {
      margin-top: -200px;
    }
    38% {
      margin-top: -100px;
    }
    66% {
      margin-top: -100px;
    }
    71% {
      margin-top: 0px;
    }
    99.99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -300px;
    }
  }
`;
