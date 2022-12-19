import { Header } from "components/layout";
import BaseLayout from "components/layout/baseLayout";
import { NextSeo } from "next-seo";
import { BASE_URL, SIGN_IN_URL } from "shared/constants/urls";
import { NextPageWithLayout } from "shared/interfaces/page";
import { SignInPage } from "../../pageContainer";

const SignIn: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title="SignIn"
        description="TOJ signIn page"
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
    <BaseLayout>
      <Header isFixed isTransparent={false} />
      {page}
    </BaseLayout>
  );
};

export default SignIn;
