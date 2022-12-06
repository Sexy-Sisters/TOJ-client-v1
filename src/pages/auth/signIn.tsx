import { HaveAuth_Header, NoAuth_Header } from "components/layout";
import BaseLayout from "components/layout/baseLayout";
import { NextSeo } from "next-seo";
import { BASE_URL } from "../../../shared/constants";
import { NextPageWithLayout } from "../../../shared/interfaces/page";
import { SignInPage } from "../../pageContainer";

const SignIn: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title="SignIn"
        description="TOJ 로그인 페이지"
        canonical={BASE_URL + "/sign-in"}
        openGraph={{
          url: BASE_URL + "/sign-in",
        }}
      />

      <SignInPage />
    </>
  );
};

SignIn.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <BaseLayout>
      <NoAuth_Header isFixed isTransparent />
      {page}
    </BaseLayout>
  );
};

export default SignIn;
