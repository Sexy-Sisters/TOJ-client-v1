import { Header } from "components/layout";
import { Content, Layout } from "components/layout/Layout";
import { NextSeo } from "next-seo";
import { BASE_URL, SIGN_IN_URL } from "shared/constants/urls";
import { NextPageWithLayout } from "shared/interfaces/page";
import { SignInPage } from "../../pageContainer";

const SignIn: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title="로그인"
        description="TOJ 로그인 페이지"
        canonical={BASE_URL + SIGN_IN_URL}
        openGraph={{
          url: BASE_URL + SIGN_IN_URL,
        }}
      />

      <SignInPage />
    </>
  );
};

SignIn.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Header isFixed isTransparent={false} />
      <Content>{page}</Content>
    </Layout>
  );
};

export default SignIn;
