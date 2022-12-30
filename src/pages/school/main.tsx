import { NextSeo } from "next-seo";
import { Header } from "components/layout";
import { BASE_URL, SCHOOL_MAIN_URL } from "shared/constants/urls";
import { MainPage } from "pageContainer/index";
import { Content, Layout } from "components/layout/Layout";

const Main = () => {
  return (
    <>
      <NextSeo
        title="우리 학교"
        description="TOJ 학교 메인 페이지"
        canonical={BASE_URL + SCHOOL_MAIN_URL}
        openGraph={{
          url: BASE_URL + SCHOOL_MAIN_URL,
        }}
      />

      <MainPage />
    </>
  );
};

Main.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Header isFixed isTransparent={false} />
      <Content>{page}</Content>
    </Layout>
  );
};

export default Main;
