import { Header } from "components/layout";
import { Content, Layout } from "components/layout/Layout";
import { NextSeo } from "next-seo";
import { BASE_URL, SIGN_UP_URL } from "../../../shared/constants/urls";
import { NextPageWithLayout } from "../../../shared/interfaces/page";
import { SignUpPage } from "../../pageContainer";

const SignUp: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title="회원가입"
        description="TOJ 회원가입 페이지"
        canonical={BASE_URL + SIGN_UP_URL}
        openGraph={{
          url: BASE_URL + SIGN_UP_URL,
        }}
      />

      <SignUpPage />
    </>
  );
};

SignUp.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Header isFixed isTransparent={false} />
      <Content>{page}</Content>
    </Layout>
  );
};

export default SignUp;
