import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
`;

export const WrapperViewer = styled.div`
  width: 600px;
`;

export const Title = styled.div`
  margin: 0 auto;
`;

export const Name = styled.h1`
  font-size: 35px;
  font-weight: bold;
  color: ${props => props.theme.textColor};
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.div`
  width: 700px;
  margin-top: 50px;
`;

export const EditorContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  margin-bottom: 100px;
`;

export const Button = styled.button`
  width: 100px;
  height: 60px;
  font-size: 24px;
`;
