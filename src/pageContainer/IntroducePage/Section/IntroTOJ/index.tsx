import React from "react";
import { Header } from "components/layout";
import * as S from "./IntroTOJ.style";

const TITLE = "TOJ";
const SUB_TITLE = "Teacher Online Judge π§βπ»";
const DESCRIBE = "λͺ¨λ°μΌμ κ°λ‘ λͺ¨λλ‘ λμν©λλ€! π";

const IntroTOJ = () => {
  return (
    <S.IntroTOJPage>
      <Header isFixed={false} isTransparent />

      <S.Page__titleBlock>
        <S.TitleBlock__wrapper>
          <S.Title className="title-text">{TITLE}</S.Title>
          <S.SubTitle className="sub-text">{SUB_TITLE}</S.SubTitle>
        </S.TitleBlock__wrapper>
      </S.Page__titleBlock>

      <S.Page__UIBlock>
        <S.DescribeMobile>{DESCRIBE}</S.DescribeMobile>

        <S.UIBlock__yellowCircle />
        <S.UIBlock__redCircle />
        <S.UIBlock__blueCircle />
        <S.UIBlock__greenCircle />
      </S.Page__UIBlock>
    </S.IntroTOJPage>
  );
};

export default IntroTOJ;
