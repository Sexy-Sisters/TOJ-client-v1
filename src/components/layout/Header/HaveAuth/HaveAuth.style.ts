import {
  Logo__block,
  UI__block,
} from "components/layout/Header/shared/Header.style";
import Image from "next/image";
import styled from "styled-components";

export const Header__logo = styled(Logo__block)`
  justify-content: space-between;
  width: 280px;
`;

export const Header__UI = styled(UI__block)`
  width: 120px;
`;

const search_bar_color = "#dfe6e9";
export const SearchBar = styled.input`
  width: 200px;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: ${search_bar_color};
  font-size: 16px;
  color: black;
`;

export const UserProfile = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
