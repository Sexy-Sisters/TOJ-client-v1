import { useRouter } from "next/router";
import React from "react";
import JoinModal from "../JoinModal";
import * as S from "./Main.style";

const MainPage = () => {
  const [joinModalToggle, setJoinModalToggle] = React.useState<boolean>(false);
  const { query } = useRouter();

  return (
    <S.PageContainer>
      <S.JoinButton onClick={() => setJoinModalToggle(curValue => !curValue)}>
        Join
      </S.JoinButton>
      {joinModalToggle && <JoinModal />}
    </S.PageContainer>
  );
};

export default MainPage;
