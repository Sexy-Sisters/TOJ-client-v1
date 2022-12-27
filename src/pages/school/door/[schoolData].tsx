import { Header } from "components/layout";
import { Content, Layout } from "components/layout/Layout";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { BASE_URL, SCHOOL_DOOR_URL } from "shared/constants/urls";
import { DoorPage } from "../../../pageContainer";

const Door = () => {
  const { query } = useRouter();

  return (
    <>
      <NextSeo
        title="학교 정보"
        description="TOJ 학교 대문 페이지"
        canonical={BASE_URL + SCHOOL_DOOR_URL + "/" + query.schoolData}
        openGraph={{
          url: BASE_URL + SCHOOL_DOOR_URL + "/" + query.schoolData,
        }}
      />

      <DoorPage />
    </>
  );
};

Door.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Header isFixed isTransparent={false} />
      <Content>{page}</Content>
    </Layout>
  );
};

export default Door;
