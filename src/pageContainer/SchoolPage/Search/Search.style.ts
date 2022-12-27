import styled from "styled-components";
import { ImSearch } from "react-icons/im";

const MOBILE_SIZE = "550px";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.bgColor};
`;

export const ContentWrapper = styled.form<{ searchState: boolean }>`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-top: ${p => (p.searchState ? "90px" : "200px")};
  transition: ${p => (p.searchState ? "all 0.5s" : "none")};

  @media (max-width: ${MOBILE_SIZE}) {
    width: 330px;
  }
`;

export const SearchLabel = styled.label<{ searchState: boolean }>`
  margin-bottom: 50px;
  font-size: 30px;
  font-weight: bold;
  white-space: pre-wrap;
  line-height: 40px;
  color: ${props => props.theme.textColor};

  @media (max-width: ${MOBILE_SIZE}) {
    font-size: 25px;
    line-height: 30px;
  }
`;

export const SearchBar = styled.input<{ searchState: boolean }>`
  position: relative;
  width: 100%;
  height: 70px;
  padding-left: 15%;
  border-radius: 10px;
  font-size: 18px;
  color: ${props => props.theme.textColor};
  box-shadow: ${p =>
    p.searchState ? "none" : "0 5px 18px -7px rgba(0, 0, 0, 1)"};

  transition: box-shadow 0.5s;

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    color: ${props => props.theme.inputText};
    cursor: pointer;
  }
  &::placeholder {
    color: ${props => props.theme.inputText};
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 50px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const SearchIcon = styled(ImSearch)<{ searchState: boolean }>`
  position: absolute;
  left: 5%;
  top: ${p => (p.searchState ? "40%" : "33%")};
  color: ${props => props.theme.textColor};
`;

export const SearchInfoText = styled.p<{ searchState: boolean }>`
  display: ${p => (p.searchState ? "inline" : "none")};
  font-size: 12px;
  color: #3498db;
`;

export const SearchLine = styled.div<{ searchState: boolean }>`
  display: ${p => (p.searchState ? "block" : "none")};
  width: 100%;
  height: 2px;
  background-color: #3498db;
  animation: wide 0.7s linear;

  @keyframes wide {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;

export const SchoolTag = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 70px;
  margin: 20px 0 0 0;
  padding-left: 20px;
  border-radius: 10px;
  background-color: ${p => p.theme.block};

  cursor: pointer;
  transition: all 0.3s;
  animation: fadeIn 0.6s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
  font-size: 18px;
  color: ${p => p.theme.textColor};

  @media (max-width: ${MOBILE_SIZE}) {
    font-size: 14px;
  }
`;

export const AddressText = styled.p`
  font-size: 12px;
  color: ${props => props.theme.blueColor};

  @media (max-width: ${MOBILE_SIZE}) {
    font-size: 10px;
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 50px;
`;
