import styled, { keyframes, css } from "styled-components";

export const Loading = styled.p<{
  loading: boolean;
  posY: string;
  posX: string;
}>`
  display: ${props => (props.loading ? "inline" : "none")};
  position: absolute;
  top: ${props => props.posY};
  left: ${props => props.posX};
  font-size: 24px;
  animation: ${props =>
    props.loading
      ? css`
          ${rotate} 1s linear infinite
        `
      : ""};
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
