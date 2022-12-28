import Image from "next/image";
import { ImSearch } from "react-icons/im";
import styled from "styled-components";

export const ListButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${p => p.theme.block};
  background-color: ${p => p.theme.bgColor};
`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 100vh;
  border-right: 2.5px solid ${p => p.theme.block};
  background-color: ${p => p.theme.bgColor};
`;

export const KindBackground = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
  background-color: ${p => p.theme.block};
`;

export const KindButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
`;

export const KindButton = styled.button`
  width: 50%;
  height: 40px;
  font-size: 14px;
  color: ${p => p.theme.textColor};
  background-color: ${p => p.theme.block};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${p => p.theme.bgColor};
  }
`;

export const NomalButton = styled(KindButton)<{ click: boolean }>`
  border-top-left-radius: 10px;
  background-color: ${p => (p.click ? p.theme.bgColor : p.theme.block)};
`;

export const WaitingButton = styled(KindButton)<{ click: boolean }>`
  border-top-right-radius: 10px;
  background-color: ${p => (p.click ? p.theme.bgColor : p.theme.block)};
`;

export const StudentSearch = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 20px 0 40px 0;
  border-radius: 40px;
  background-color: ${p => p.theme.bgColor};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${p => p.theme.block};
  }
`;

export const SearchIcon = styled(ImSearch)`
  margin: 0 10px 0 20px;
  color: ${props => props.theme.textColor};
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 40px;
  font-size: 14px;
  text-align: left;
  color: ${p => p.theme.textColor};

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    cursor: pointer;
  }

  &::placeholder {
    color: ${props => props.theme.inputText};
  }
`;

export const StudentCard = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 70px;
  margin: 10px 0 10px 0;
  border-radius: 10px;
  border: 2px solid ${p => p.theme.block};
  background-color: ${p => p.theme.bgColor};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${p => p.theme.block};
  }
`;

export const profileImg = styled(Image)`
  width: 40px;
  height: auto;
  margin: 0 20px 0 20px;
  clip-path: circle(20px at center);
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 50%;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${p => p.theme.textColor};
`;

export const Id = styled.p`
  font-size: 12px;
  color: ${p => p.theme.blueColor};
`;
