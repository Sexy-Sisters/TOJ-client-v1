import styled from "styled-components";

const MOBILE_SIZE = "550px";

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

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 500px;

  @media (max-width: ${MOBILE_SIZE}) {
    width: 300px;
  }
`;

export const KindName = styled.h1`
  font-size: 30px;
  color: ${props => props.theme.textColor};
  white-space: pre-wrap;
  line-height: 40px;
`;

export const Input = styled.input<{ width: string; border: string }>`
  width: ${props => props.width};
  height: 50px;
  border-radius: ${props => props.border};
  text-align: center;
  font-size: 20px;
  background-color: ${props => props.theme.input};
  color: ${props => props.theme.textColor};

  &::placeholder {
    font-size: 20px;
    color: ${props => props.theme.bgColor};
  }

  @media (max-width: ${MOBILE_SIZE}) {
    font-size: 20px;
  }
`;

export const Button = styled.button<{
  width: string;
  border: string;
  defaultColor: string;
  hoverColor: string;
}>`
  position: relative;
  width: ${props => props.width};
  height: 50px;
  border-radius: ${props => props.border};
  font-size: 20px;
  font-weight: bold;
  background-color: ${props => props.defaultColor};
  color: ${props => props.theme.bgColor};

  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;

export const ColorLine = styled.div<{ color: string }>`
  position: absolute;
  bottom: 100px;
  width: 100vw;
  height: 15px;
  background-color: ${props => props.color};
`;
