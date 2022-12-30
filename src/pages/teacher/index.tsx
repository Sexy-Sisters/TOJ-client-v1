import React from "react";
import { Header } from "components/layout";
import { NextPageWithLayout } from "shared/interfaces/page";
import { Content, Layout } from "components/layout/Layout";
import { NextSeo } from "next-seo";
import { BASE_URL, TEACHER_URL } from "shared/constants/urls";
import TeacherPage from "pageContainer/TeacherPage";

const Teacher: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title="우리 학교 선생님 👨‍🏫"
        description="TOJ 선생님 페이지"
        canonical={BASE_URL + TEACHER_URL}
        openGraph={{
          url: BASE_URL + TEACHER_URL,
        }}
      />

      <TeacherPage />
    </>
  );
};

Teacher.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Header isFixed isTransparent={false} />
      <Content>{page}</Content>
    </Layout>
  );
};

export default Teacher;
