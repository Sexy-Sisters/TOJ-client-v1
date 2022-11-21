import styled from "styled-components";
import { MOBILE_SIZE, PAD_SIZE, Page } from "../../IntroduceSections.style";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const Cicle = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.7;
  transition: all 1s;

  &:hover {
    border-radius: 45%;
    scale: 1.1;
  }

  @keyframes move {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Text = styled.h1`
  font-weight: bold;
  margin: 20px;
  color: ${props => props.theme.textColor};
`;

export const IntroTOJPage = styled(Page)`
  background-color: ${props => props.theme.bgColor};
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (max-width: ${PAD_SIZE}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleWrapper = styled(Wrapper)`
  position: relative;
  z-index: 5;
`;

export const TextBundle = styled.div`
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

  @media (max-width: ${MOBILE_SIZE}) {
    .titleText {
      font-size: 100px;
    }
    .subText {
      font-size: 20px;
    }
  }
`;

export const TitleText = styled(Text)`
  text-transform: uppercase;
  font-size: 150px;
`;

export const SubText = styled(Text)`
  font-size: 40px;
`;

export const CircleWrapper = styled(Wrapper)`
  position: relative;
`;

export const YellowCircle = styled(Cicle)`
  z-index: 1;
  top: 100px;
  left: 200px;

  width: 450px;
  height: 450px;
  animation: move 40s infinite linear;
  transform-origin: -10px;
  background-color: ${props => props.theme.yellowColor};
`;

export const BlueCircle = styled(Cicle)`
  z-index: 2;
  top: 250px;
  left: 20px;

  width: 350px;
  height: 350px;
  animation: move 25s infinite linear;
  transform-origin: 120px;
  background-color: ${props => props.theme.blueColor};
`;

export const GreenCircle = styled(Cicle)`
  z-index: 3;

  width: 300px;
  height: 300px;
  animation: move 20s infinite linear;
  transform-origin: 10px;
  background-color: ${props => props.theme.greenColor};
`;

export const RedCircle = styled(Cicle)`
  z-index: 4;
  left: 100px;

  width: 250px;
  height: 250px;
  animation: move 10s infinite linear;
  transform-origin: -10px;
  background-color: ${props => props.theme.redColor};
`;

export const DescriptionText = styled.p`
  display: none;
  position: absolute;
  z-index: 5;
  font-size: 17px;
  font-weight: bold;
  white-space: nowrap;
  color: ${props => props.theme.textColor};
  animation: fade linear 1.5s infinite;

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
