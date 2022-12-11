import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 150px;
  width: 400px;
  height: 500px;
  border-radius: 20px;
  background-color: white;
`;

export const UIWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  height: 90%;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 20%;
  height: 20px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const Button = styled.button`
  width: 100%;
  height: 25px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${props => props.theme.yellowColor};
`;
