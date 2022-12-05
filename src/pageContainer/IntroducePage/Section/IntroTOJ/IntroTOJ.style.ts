import styled from "styled-components";
import { Page } from "../../IntroducePage.style";
import { MOBILE_SIZE, PAD_SIZE } from "../../IntroducePage.constant";

const WRAPPER = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const CIRCLE_UI = styled.div`
  position: absolute;
  opacity: 0.7;
  border-radius: 50%;
  transition: all 1s;

  &:hover {
    scale: 1.1;
    border-radius: 45%;
  }

  @keyframes move {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const TITLE = styled.h1`
  margin: 20px;
  font-weight: bold;
  color: ${props => props.theme.textColor};
`;

export const IntroTOJPage = styled(Page)`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.bgColor};

  @media (max-width: ${PAD_SIZE}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Page__titleBlock = styled(WRAPPER)`
  position: relative;
  z-index: 5;
`;

export const TitleBlock__wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  white-space: nowrap;
  animation: fadeIn ease-out 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const Title = styled(TITLE)`
  font-size: 150px;
  text-transform: uppercase;

  @media (max-width: ${MOBILE_SIZE}) {
    font-size: 100px;
  }
`;

export const SubTitle = styled(TITLE)`
  font-size: 40px;

  @media (max-width: ${MOBILE_SIZE}) {
    font-size: 20px;
  }
`;

export const Page__UIBlock = styled(WRAPPER)`
  position: relative;
`;

export const UIBlock__yellowCircle = styled(CIRCLE_UI)`
  z-index: 1;
  top: 100px;
  left: 200px;
  width: 450px;
  height: 450px;
  transform-origin: -10px;
  animation: move 40s infinite linear;
  background-color: ${props => props.theme.yellowColor};
`;

export const UIBlock__blueCircle = styled(CIRCLE_UI)`
  z-index: 2;
  top: 250px;
  left: 20px;
  width: 350px;
  height: 350px;
  transform-origin: 120px;
  animation: move 25s infinite linear;
  background-color: ${props => props.theme.blueColor};
`;

export const UIBlock__greenCircle = styled(CIRCLE_UI)`
  z-index: 3;
  width: 300px;
  height: 300px;
  transform-origin: 10px;
  animation: move 20s infinite linear;
  background-color: ${props => props.theme.greenColor};
`;

export const UIBlock__redCircle = styled(CIRCLE_UI)`
  z-index: 4;
  left: 100px;
  width: 250px;
  height: 250px;
  transform-origin: -10px;
  animation: move 10s infinite linear;
  background-color: ${props => props.theme.redColor};
`;

export const DescribeMobile = styled.p`
  display: none;
  position: absolute;
  z-index: 5;
  font-size: 17px;
  font-weight: bold;
  white-space: nowrap;
  animation: fade linear 1.5s infinite;
  color: ${props => props.theme.textColor};

  @media (max-width: ${MOBILE_SIZE}) {
    display: inline;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
