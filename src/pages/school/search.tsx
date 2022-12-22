import { Header, BaseLayout } from "components/layout";
import { NextSeo } from "next-seo";
import { SearchPage } from "../../pageContainer";
import { BASE_URL, SCHOOL_SEARCH_URL } from "shared/constants/urls";

const Search = () => {
  return (
    <>
      <NextSeo
        title="학교 검색"
        description="TOJ 학교 검색 페이지"
        canonical={BASE_URL + SCHOOL_SEARCH_URL}
        openGraph={{
          url: BASE_URL + SCHOOL_SEARCH_URL,
        }}
      />

      <SearchPage />
    </>
  );
};

Search.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <BaseLayout>
      <Header isFixed isTransparent={false} />
      {page}
    </BaseLayout>
  );
};

export default Search;
