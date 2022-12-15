import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.bgColor};
`;

export const WikiPage = styled.div`
  width: 100%;
  padding-top: 90px;
`;

export const JoinButton = styled.button`
  width: 100px;
  height: 60px;
  font-size: 24px;
`;
