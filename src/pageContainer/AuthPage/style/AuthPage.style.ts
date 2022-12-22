import styled from "styled-components";

const MOBILE_SIZE = "550px";

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
  box-sizing: border-box;
  border-radius: ${props => props.border};
  border: 2px solid ${props => props.theme.inputText};
  text-align: center;
  font-size: 16px;
  color: ${props => props.theme.textColor};

  &::placeholder {
    font-size: 16px;
    color: ${props => props.theme.inputText};
  }
  &:hover {
    background-color: ${props => props.theme.bgColor};
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
  font-size: 16px;
  font-weight: bold;
  background-color: ${props => props.defaultColor};
  color: ${props => props.theme.bgColor};

  &:hover {
    background-color: ${props => props.hoverColor};
  }
`;

export const ColorLine = styled.div<{ color: string }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: ${props => props.color};

  @media (max-width: ${MOBILE_SIZE}) {
    height: 50px;
  }
`;
