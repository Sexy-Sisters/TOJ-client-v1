import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div<{ modalState: boolean }>`
  display: flex;
  justify-content: center;
  position: ${props => (props.modalState ? "fixed" : "absolute")};
  left: 0;
  top: ${props => (props.modalState ? "0" : "-100%")};
  width: 100vw;
  height: 100vh;
  transition: top 0.5s;
`;

export const BackgroundContainer = styled.div`
  z-index: 10;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  margin-top: 150px;
  width: 600px;
  height: 400px;
  border-radius: 10px;
  background-color: white;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 50%;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 70%;
`;

export const ProfileImg = styled(Image)`
  width: 150px;
  height: auto;
  border-radius: 10px;
`;

export const BioInput = styled.input`
  width: 90%;
  height: 40%;
  background-color: ${p => p.theme.block};
`;

export const NameInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: ${p => p.theme.block};
`;

export const NickNameInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: ${p => p.theme.block};
`;
