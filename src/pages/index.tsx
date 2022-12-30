import React from "react";
import { Header } from "components/layout";
import { NextPageWithLayout } from "shared/interfaces/page";
import { Content, Layout } from "components/layout/Layout";
import { NextSeo } from "next-seo";
import { BASE_URL } from "shared/constants/urls";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title="이제는 우리가 평가할게"
        description="TOJ 홈 페이지"
        canonical={BASE_URL}
        openGraph={{
          url: BASE_URL,
        }}
      />
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Header isFixed isTransparent={false} />
      <Content>{page}</Content>
    </Layout>
  );
};

export default Home;
