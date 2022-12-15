import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
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

  // quill에서 가운데 정렬을 한 경우
  .ql-align-center {
    text-align: center;
  }

  // quill에서 코드 블럭을 사용한 경우
  .ql-syntax {
    padding: 5px;
    margin: 0 10px;
    border-radius: 3px;
    background-color: ${props => props.theme.input};
    color: white;
  }
`;

export const EditorContainer = styled.div`
  width: 800px;
  height: 500px;
  margin: 0 auto;
  margin-bottom: 100px;
`;

export const Button = styled.button`
  width: 100px;
  height: 60px;
  font-size: 24px;
`;
