import React from "react";
import * as S from "./Search.style";
import { useForm } from "react-hook-form";
import { ISearch, ISearchData, ISearchResponse } from "../interface/search";
import school from "../api/school";
import { ErrorText } from "components/common";
import { SCHOOL_DOOR_URL } from "../../../../shared/constants/urls";

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
  const [searchState, onSearch] = React.useState<boolean>(false);

  const searchResult = (): JSX.Element[] | null => {
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
      return null;
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
      <S.ContentWrapper
        onSubmit={handleSubmit(onValid)}
        searchState={searchState}
      >
        <S.SearchLabel
          searchState={searchState}
        >{`학교를 입력하고\n새로운 학교를 둘러보세요! 🏫`}</S.SearchLabel>

        <S.SearchContainer>
          <S.SearchIcon size={25} searchState={searchState} />

          <S.SearchWrapper>
            <S.SearchInfoText searchState={searchState}>
              초등학교/중학교/고등학교
            </S.SearchInfoText>

            <S.SearchBar
              type="search"
              autoComplete="off"
              placeholder="학교 검색..."
              {...register("name", {
                required: "학교 이름을 검색해 보세요",
              })}
              searchState={searchState}
              onClick={() => onSearch(true)}
            />

            <S.SearchLine searchState={searchState} />
          </S.SearchWrapper>

          <ErrorText
            isError={errors.name?.message ? true : false}
            message={errors.name?.message}
            top={"100px"}
            left={"0"}
          />
        </S.SearchContainer>

        <S.ResultContainer>{searchResult()}</S.ResultContainer>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default SearchPage;
