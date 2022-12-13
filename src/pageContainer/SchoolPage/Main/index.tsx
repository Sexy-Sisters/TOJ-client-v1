import React from "react";
import { useRouter } from "next/router";
import JoinModal from "../JoinModal";
import * as S from "./Main.style";

const MainPage = () => {
  const { query } = useRouter();
  const [initialSchool, setInitialSchool] = React.useState<{
    code: string;
    grade: string;
  } | null>(null);
  const [joinModalToggle, setJoinModalToggle] = React.useState<boolean>(false);

  React.useEffect(() => {
    const schoolData = query.schoolData;
    console.log(schoolData);

    if (typeof schoolData === "string") {
      const [grade, code] = schoolData.split("&");
      setInitialSchool({ grade, code });
    }
  }, [query]);

  return (
    <S.PageContainer>
      <S.JoinButton onClick={() => setJoinModalToggle(curValue => !curValue)}>
        Join
      </S.JoinButton>
      {joinModalToggle && initialSchool && (
        <JoinModal
          toggle={setJoinModalToggle}
          code={initialSchool.code}
          grade={initialSchool.grade}
        />
      )}
    </S.PageContainer>
  );
};

export default MainPage;
