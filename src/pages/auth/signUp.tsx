import { HaveAuth_Header, NoAuth_Header } from "components/layout";
import BaseLayout from "components/layout/baseLayout";
import { NextSeo } from "next-seo";
import { BASE_URL } from "../../../shared/constants";
import { NextPageWithLayout } from "../../../shared/interfaces/page";
import { SignUpPage } from "../../pageContainer";

const SignUp: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title="SignUp"
        description="TOJ 회원가입 페이지"
        canonical={BASE_URL + "/sign-up"}
        openGraph={{
          url: BASE_URL + "/sign-up",
        }}
      />

      <SignUpPage />
    </>
  );
};

SignUp.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <BaseLayout>
      <NoAuth_Header isFixed isTransparent />
      {page}
    </BaseLayout>
  );
};

export default SignUp;
