import styled, { css, keyframes } from "styled-components";

export const Success = styled.p<{ success: boolean }>`
  display: ${props => (props.success ? "inline" : "none")};
  position: absolute;
  z-index: 100;
  margin-top: 60px;
  font-size: 16px;
  color: ${props => props.theme.success};
  animation: ${props =>
    props.success
      ? css`
          ${popUp} 0.3s ease-out forwards
        `
      : ""};
`;

const popUp = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
