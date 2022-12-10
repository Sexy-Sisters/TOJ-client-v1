import { Header, BaseLayout } from "components/layout";
import { NextSeo } from "next-seo";
import { SearchPage } from "pageContainer/SchoolPage";
import { BASE_URL, SCHOOL_SEARCH } from "../../../shared/constants";

const Search = () => {
  return (
    <>
      <NextSeo
        title="School-search"
        description="TOJ School-search page"
        canonical={BASE_URL + SCHOOL_SEARCH}
        openGraph={{
          url: BASE_URL + SCHOOL_SEARCH,
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
