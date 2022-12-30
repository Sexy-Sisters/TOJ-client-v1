import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const TeacherCreateButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  background-color: ${p => p.theme.greenColor};
  font-size: 14px;
  color: white;
`;
