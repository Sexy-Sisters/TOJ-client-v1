import React from "react";
import { useForm } from "react-hook-form";
import { ISearch, ISearchData, ISearchResponse } from "../interface/search";
import school from "../api/school";
import { ErrorText } from "components/common";
import { SCHOOL_DOOR_URL } from "../../../../shared/constants/urls";
import * as S from "./Search.style";

const SEARCH_TITLE = `Search for\nthe name of the school 🔍`;
const EMPTY_EMOJI = `👀\n👅`;

const SearchPage = () => {
  const [searchList, setSearchList] = React.useState<ISearchData[] | null>(
    null,
  );
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISearch>();

  const searchResult = (): JSX.Element[] | JSX.Element => {
    if (searchList) {
      return searchList.map(school => (
        <S.SchoolTag
          key={school.code}
          onClick={() =>
            location.replace(
              SCHOOL_DOOR_URL + `/${school.division}&${school.code}`,
            )
          }
        >
          <S.NameText>{school.name}</S.NameText>
          <S.AddressText>{school.address}</S.AddressText>
        </S.SchoolTag>
      ));
    } else {
      return <S.EmptyIcon>{EMPTY_EMOJI}</S.EmptyIcon>;
    }
  };

  const onValid = async (data: ISearch) => {
    try {
      const { data: res } = (await school.search(data)) as ISearchResponse;

      if (res.result === "SUCCESS") {
        setSearchList(res.data);
      }
      if (res.result === "FAIL" && res.message) {
        setSearchList(null);
        setError(
          "name",
          {
            message: res.message,
          },
          {
            shouldFocus: true,
          },
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Container>
      <S.ContentWrapper onSubmit={handleSubmit(onValid)}>
        <S.SearchLabel>{SEARCH_TITLE}</S.SearchLabel>

        <S.SearchWrapper>
          <S.SearchBar
            type="search"
            placeholder="search for the school"
            {...register("name", {
              required: "Please enter the name of the school",
            })}
          />
          <S.SearchButton type="submit">search 🚌</S.SearchButton>

          <ErrorText
            isError={errors.name?.message ? true : false}
            message={errors.name?.message}
            top={"60px"}
            left={"0"}
          />
        </S.SearchWrapper>

        <S.ResultBox>{searchResult()}</S.ResultBox>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default SearchPage;
