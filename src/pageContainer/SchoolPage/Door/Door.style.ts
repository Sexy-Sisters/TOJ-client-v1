import Image from "next/image";
import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
`;

export const WikiContainer = styled.div`
  width: 100%;
  padding-top: 50px;
`;

export const BgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

export const BackgroundPhoto = styled(Image)`
  position: absolute;
  z-index: -1;
  width: 100%;
`;

export const JoinButton = styled.button`
  position: absolute;
  width: 100px;
  height: 60px;
  font-size: 24px;
`;

export const BgChanger = styled.label`
  position: absolute;
  left: 15px;
  bottom: 15px;
  font-size: 16px;
  padding: 5px 15px 5px 15px;
  border-radius: 5px;
  color: #636e72;
  background-color: #dfe6e9;
  opacity: 0.7;
  cursor: pointer;
`;
