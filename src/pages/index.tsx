import { HaveAuth_Header } from "components/layout";
import Base_Layout from "components/base_layout";
import React from "react";
import { NextPageWithLayout } from "../../shared/interfaces/page";

const Home: NextPageWithLayout = () => {
  return <React.Fragment></React.Fragment>;
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Base_Layout>
      <HaveAuth_Header isIntroduce={false} />
      {page}
    </Base_Layout>
  );
};

export default Home;
