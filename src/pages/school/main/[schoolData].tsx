import { Header, BaseLayout } from "components/layout";
import { NextSeo } from "next-seo";
import { MainPage } from "../../../pageContainer";

const Main = () => {
  return (
    <>
      <NextSeo title="School-main" description="TOJ School-main page" />

      <MainPage />
    </>
  );
};

Main.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <BaseLayout>
      <Header isFixed isTransparent={false} />
      {page}
    </BaseLayout>
  );
};

export default Main;
