import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  margin: 200px 0 200px 0;
`;

export const TeacherCard = styled.div`
  width: 250px;
  height: 200px;
  border-radius: 10px;
  background-color: ${p => p.theme.bgColor};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;
