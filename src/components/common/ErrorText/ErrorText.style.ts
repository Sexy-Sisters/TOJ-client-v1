import styled, { css, keyframes } from "styled-components";

export const Error = styled.p<{ error: boolean }>`
  display: ${props => (props.error ? "inline" : "none")};
  position: absolute;
  z-index: 100;
  white-space: nowrap;
  margin-top: 60px;
  font-size: 16px;
  color: ${props => props.theme.error};
  animation: ${props =>
    props.error
      ? css`
          ${shake} 0.3s
        `
      : ""};
`;

const shake = keyframes`
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }                 
`;
