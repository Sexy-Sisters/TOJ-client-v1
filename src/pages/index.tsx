import React from "react";
import { HaveAuth_Header } from "components/layout";
import Base_Layout from "../components/layout/baseLayout";
import { NextPageWithLayout } from "../../shared/interfaces/page";

const Home: NextPageWithLayout = () => {
  return <></>;
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Base_Layout>
      <HaveAuth_Header isTransparent={false} isFixed />
      {page}
    </Base_Layout>
  );
};

export default Home;
