import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.bgColor};
`;

export const JoinButton = styled.button`
  width: 40px;
  height: 20px;
  font-size: 24px;
  margin: 100px 0 0 0;
`;
