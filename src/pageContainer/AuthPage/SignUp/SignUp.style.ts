import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Section = styled.div`
  flex: none;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.bgColor};
`;

export const FormWrapper = styled.div<{ height: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: ${props => props.height};
  margin-top: 150px;
`;
