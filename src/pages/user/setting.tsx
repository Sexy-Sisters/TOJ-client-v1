import { NextSeo } from "next-seo";
import { Header, BaseLayout } from "components/layout";
import { BASE_URL, USER_SETTING_URL } from "shared/constants/urls";

const Setting = () => {
  return (
    <>
      <NextSeo
        title="사용자 프로필"
        description="TOJ 사용자 프로필 설정 페이지"
        canonical={BASE_URL + USER_SETTING_URL}
        openGraph={{
          url: BASE_URL + USER_SETTING_URL,
        }}
      />

      <p>사용자 설정 페이지</p>
    </>
  );
};

Setting.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <BaseLayout>
      <Header isFixed isTransparent={false} />
      {page}
    </BaseLayout>
  );
};

export default Setting;
