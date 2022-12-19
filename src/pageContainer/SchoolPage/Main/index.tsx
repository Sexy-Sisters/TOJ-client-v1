import React from "react";
import { useRouter } from "next/router";
import JoinModal from "../JoinModal";
import Wiki from "./Wiki";
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

    if (typeof schoolData === "string") {
      const [grade, code] = schoolData.split("&");
      setInitialSchool({ grade, code });
    }
  }, [query]);

  return (
    <S.PageContainer>
      <S.WikiPage>
        <S.JoinButton onClick={() => setJoinModalToggle(curValue => !curValue)}>
          Join
        </S.JoinButton>

        {initialSchool && (
          <>
            <Wiki schoolCode={initialSchool.code} />

            <JoinModal
              modalState={joinModalToggle}
              toggle={setJoinModalToggle}
              code={initialSchool.code}
              grade={initialSchool.grade}
            />
          </>
        )}
      </S.WikiPage>
    </S.PageContainer>
  );
};

export default MainPage;
