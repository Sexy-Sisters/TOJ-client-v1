import styled from "styled-components";
import * as G from "../../SignUp.style";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 300px;
  margin-top: 150px;
`;

export const RePasswordForm = styled(G.Form)`
  flex-direction: column;
  height: 130px;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
