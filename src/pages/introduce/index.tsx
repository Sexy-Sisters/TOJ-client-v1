import React from "react";
import { NextSeo } from "next-seo";
import { BASE_URL } from "../../../shared/constants";
import { IntroduceSections } from "../../components";
import { NextPageWithLayout } from "../../../shared/interfaces/page";
import Base_Layout from "components/layout/base_layout";

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
      <IntroduceSections />
    </>
  );
};

Introduce.getLayout = function getLayout(page: React.ReactElement) {
  return <Base_Layout>{page}</Base_Layout>;
};

export default Introduce;
