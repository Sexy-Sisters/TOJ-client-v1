import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

export const WrapperViewer = styled.div`
  width: 600px;
  padding: 20px;
  border-radius: 15px;
  background-color: ${props => props.theme.block};
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ViewCount = styled.p`
  font-size: 14px;
  color: ${props => props.theme.textColor};
`;

export const LastDate = styled.p`
  font-size: 14px;
  color: ${props => props.theme.textColor};
`;

export const Name = styled.h1`
  font-size: 35px;
  font-weight: bold;
  margin: 20px;
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
