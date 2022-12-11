import { Header } from "components/layout";
import BaseLayout from "components/layout/baseLayout";
import { NextSeo } from "next-seo";
import { BASE_URL, SIGN_UP_URL } from "../../../shared/constants/urls";
import { NextPageWithLayout } from "../../../shared/interfaces/page";
import { SignUpPage } from "../../pageContainer";

const SignUp: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title="SignUp"
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
    <BaseLayout>
      <Header isFixed isTransparent={false} />
      {page}
    </BaseLayout>
  );
};

export default SignUp;
