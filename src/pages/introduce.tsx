import React from "react";
import { NextSeo } from "next-seo";
import { BASE_URL } from "../../shared/constants";
import { IntroducePage } from "../pageContainer";
import { NextPageWithLayout } from "../../shared/interfaces/page";
import BaseLayout from "components/layout/baseLayout";

const Introduce: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title="Introduce"
        description="TOJ 웹 사이트 개발 동기 설명 페이지"
        canonical={BASE_URL + "/introduce"}
        openGraph={{
          url: BASE_URL + "/introduce",
        }}
      />

      <IntroducePage />
    </>
  );
};

Introduce.getLayout = function getLayout(page: React.ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Introduce;
