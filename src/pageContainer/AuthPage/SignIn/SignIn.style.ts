import styled from "styled-components";
import * as Auth from "pageContainer/AuthPage/style/AuthPage.style";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.bgColor};
`;

export const Form = styled(Auth.Form)`
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 350px;
  margin-top: 100px;
`;
