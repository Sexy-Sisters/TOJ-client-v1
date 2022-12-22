import { Header, BaseLayout } from "components/layout";
import { NextSeo } from "next-seo";
import { DoorPage } from "../../../pageContainer";

const Door = () => {
  return (
    <>
      <NextSeo title="학교 정보" description="TOJ 학교 대문 페이지" />

      <DoorPage />
    </>
  );
};

Door.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <BaseLayout>
      <Header isFixed isTransparent={false} />
      {page}
    </BaseLayout>
  );
};

export default Door;
