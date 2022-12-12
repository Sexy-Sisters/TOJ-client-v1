import React from "react";
import { useRouter } from "next/router";
import JoinModal from "../JoinModal";
import * as S from "./Main.style";

const MainPage = () => {
  const { query } = useRouter();
  const [joinModalToggle, setJoinModalToggle] = React.useState<boolean>(false);

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
