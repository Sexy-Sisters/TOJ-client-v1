import React from "react";
import { Header } from "components/layout";
import Base_Layout from "../components/layout/baseLayout";
import { NextPageWithLayout } from "../../shared/interfaces/page";
import { GetServerSideProps } from "next";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../shared/constants";

const Home: NextPageWithLayout = () => {
  return <></>;
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Base_Layout>
      <Header isFixed isTransparent={false} />
      {page}
    </Base_Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const cookie = ctx.req.cookies;
  const accessToken = cookie[ACCESS_TOKEN];
  const refreshToken = cookie[REFRESH_TOKEN];

  if (accessToken && refreshToken) {
    return {
      props: {},
    };
  } else {
    return {
      props: {},
    };
  }
};

export default Home;
