import React from "react";
import { useRouter } from "next/router";
import JoinModal from "../JoinModal";
import * as S from "./Main.style";
import { IInitialSchool } from "../interface/main";

const MainPage = () => {
  const { query } = useRouter();
  const [initialSchool, setInitialSchool] =
    React.useState<IInitialSchool | null>(null);
  const [joinModalToggle, setJoinModalToggle] = React.useState<boolean>(false);

  React.useEffect(() => {
    const initialValue = query.schoolData;

    if (typeof initialValue === "string") {
      const [grade, code] = initialValue.split("&");
      setInitialSchool({ grade, code });
    }
  }, []);

  return (
    <S.PageContainer>
      <S.JoinButton onClick={() => setJoinModalToggle(curValue => !curValue)}>
        Join
      </S.JoinButton>
      {joinModalToggle && initialSchool && (
        <JoinModal code={initialSchool.code} grade={initialSchool.grade} />
      )}
    </S.PageContainer>
  );
};

export default MainPage;
