import styled from "styled-components";

const MOBILE_SIZE = "500px";

export const Container = styled.div<{ modalState: boolean }>`
  z-index: 100;
  display: flex;
  justify-content: center;
  position: absolute;
  left: ${props => (props.modalState ? "0" : "-100%")};
  top: 0;
  width: 100vw;
  height: 100vh;
  transition: all 0.7s;
`;

export const BackgroundContainer = styled.div`
  z-index: 10;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ModalContainer = styled.div`
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 150px;
  width: 400px;
  height: 500px;
  border-radius: 20px;
  background-color: #f5f6fa;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  @media (max-width: ${MOBILE_SIZE}) {
    width: 300px;
    height: 400px;
  }
`;

export const UIWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 75%;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Select = styled.select<{ width: string }>`
  width: ${props => props.width};
  height: 35px;
  border-radius: 13px;
  font-size: 20px;
  font-weight: bold;
  background-color: #dfe6e9;
  color: white;

  border: none;
  text-align: center;
  appearance: none;
  outline: none;

  @media (max-width: ${MOBILE_SIZE}) {
    height: 30px;
    border-radius: 10px;
  }
`;

export const Text = styled.p`
  font-size: 22px;
  font-weight: bold;

  @media (max-width: ${MOBILE_SIZE}) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${props => props.theme.yellowColor};

  @media (max-width: ${MOBILE_SIZE}) {
    height: 40px;
    border-radius: 13px;
  }
`;

export const DecoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  left: 0;
  top: -70px;
  width: 100%;

  @media (max-width: ${MOBILE_SIZE}) {
    top: -50px;
  }
`;

export const DecoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 70%;
`;

export const DecoSpring = styled.div`
  width: 30px;
  height: 55px;
  border-radius: 10px;
  background-color: #808e9b;

  @media (max-width: ${MOBILE_SIZE}) {
    width: 20px;
    height: 40px;
    border-radius: 7px;
  }
`;

export const DecoEmoji = styled.div`
  font-size: 100px;

  @media (max-width: ${MOBILE_SIZE}) {
    font-size: 70px;
  }
`;
