import React from "react";
import { NextSeo } from "next-seo";
import { BASE_URL, INTRODUCE_URL } from "../../shared/constants/urls";
import { IntroducePage } from "../pageContainer";
import { NextPageWithLayout } from "../../shared/interfaces/page";
import { Layout } from "components/layout/Layout";

const Introduce: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title="학교의 부조리를 우아하게 조리하자"
        description="TOJ 웹 사이트 개발 동기 설명 페이지"
        canonical={BASE_URL + INTRODUCE_URL}
        openGraph={{
          url: BASE_URL + INTRODUCE_URL,
        }}
      />

      <IntroducePage />
    </>
  );
};

Introduce.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Introduce;
