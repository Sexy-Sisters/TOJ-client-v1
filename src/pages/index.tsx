import React from "react";
import { HaveAuth_Header } from "components/layout";
import Base_Layout from "../components/layout/baseLayout";
import { NextPageWithLayout } from "../../shared/interfaces/page";
import { GetServerSideProps } from "next";
import { SIGN_IN_URL } from "../../shared/constants";
``;
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

// access, refresh token
export const getServerSideProps: GetServerSideProps = async ctx => {
  const cookie = ctx.req.cookies;
  const accessToken = cookie["accessToken"];
  const refreshToken = cookie["refreshToken"];

  console.log(ctx.req.cookies);

  if (accessToken) {
    if (refreshToken) {
      return {
        props: {},
      };
    } else {
      try {
        return {
          props: {},
        };
      } catch (error) {
        return {
          props: {},
        };
      }
    }
  } else {
    return {
      props: {},
      redirect: {
        destination: SIGN_IN_URL,
      },
    };
  }
};

export default Home;
