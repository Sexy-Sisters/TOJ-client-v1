import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { BASE_URL } from "../../../shared/constants";
import { IntroduceSections } from "../../components";

const Introduce: NextPage = () => {
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

export default Introduce;
