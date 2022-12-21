import { Header, BaseLayout } from "components/layout";
import { NextSeo } from "next-seo";
import { DoorPage } from "../../../pageContainer";

const Door = () => {
  return (
    <>
      <NextSeo title="School-door" description="TOJ School-door page" />

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
