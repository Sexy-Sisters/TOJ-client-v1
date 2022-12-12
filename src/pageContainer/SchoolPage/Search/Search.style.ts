import styled from "styled-components";

const MOBILE_SIZE = "630px";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.bgColor};
`;

export const ContentWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  height: 600px;
  margin-top: 90px;

  @media (max-width: ${MOBILE_SIZE}) {
    width: 90vw;
    height: 550px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const SearchLabel = styled.label`
  font-size: 30px;
  font-weight: bold;
  white-space: pre-wrap;
  line-height: 40px;
  color: ${props => props.theme.textColor};

  @media (max-width: ${MOBILE_SIZE}) {
    font-size: 6vw;
    line-height: 6.5vw;
  }
`;

export const SearchBar = styled.input`
  width: 70%;
  height: 45px;
  border: solid 3px;
  border-radius: 15px;
  border-color: ${props => props.theme.input};
  font-size: 16px;
  background-color: ${props => props.theme.input};
  color: ${props => props.theme.textColor};

  text-align: center;
  transition: border 0.2s;

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    cursor: pointer;
  }

  &::placeholder {
    color: ${props => props.theme.inputText};
  }

  &:hover {
    border-color: ${props => props.theme.blueColor};
  }
`;

export const SearchButton = styled.button`
  width: 25%;
  height: 45px;
  border-radius: 15px;
  font-size: 18px;
  font-weight: bold;
  background-color: ${props => props.theme.yellowColor};
  color: ${props => props.theme.bgColor};

  &:hover {
    background-color: #ffdc9c;
  }

  @media (max-width: ${MOBILE_SIZE}) {
    font-size: 3vw;
  }
`;

export const SchoolTag = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 85%;
  height: 14.5%;
  margin: 18px 0 0 0;
  border-radius: 15px;
  background-color: white;

  transition: box-shadow 0.3s;
  cursor: pointer;
  animation: fadeIn 0.6s;

  &:hover {
    box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
  }

  @keyframes fadeIn {
    0% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const NameText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: black;

  @media (max-width: ${MOBILE_SIZE}) {
    font-size: 12px;
  }
`;

export const AddressText = styled.p`
  font-size: 14px;
  color: ${props => props.theme.blueColor};

  @media (max-width: ${MOBILE_SIZE}) {
    font-size: 10px;
  }
`;

export const EmptyIcon = styled.div`
  margin: 30px;
  font-size: 100px;
  white-space: pre-wrap;

  animation: shake 3s infinite;

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(25deg);
    }
    20% {
      transform: rotate(-25deg);
    }
    30% {
      transform: rotate(10deg);
    }
    40% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(5deg);
    }
    60% {
      transform: rotate(-5deg);
    }
    70% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 400px;
  margin-top: 30px;
  border-radius: 15px;
  background-color: ${props => props.theme.yellowColor};

  @media (max-width: ${MOBILE_SIZE}) {
    height: 380px;
  }
`;
