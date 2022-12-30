import * as S from "./EndTOJ.style";
import {
  TOJ_ADD_TEXT,
  TOJ_STRONG_TEXT,
  TOJ_COLOR,
  J_WORD,
  TITLE,
} from "./EndTOJ.constant";

const tojContent = () => {
  return TOJ_STRONG_TEXT.map((toj_strong, i) => (
    <S.Content key={toj_strong}>
      <S.StrongText color={TOJ_COLOR[i]}>{toj_strong}</S.StrongText>
      {TOJ_ADD_TEXT[i]}
    </S.Content>
  ));
};

const wordChapter = () => {
  return (
    <S.Word__block>
      {J_WORD.map(word => (
        <S.Word key={word}>{word}</S.Word>
      ))}
    </S.Word__block>
  );
};

const EndTOJ = () => {
  return (
    <S.EndTOJPage>
      <S.Title__block>
        <S.Title>{TITLE}</S.Title>
      </S.Title__block>

      <S.Content__block>
        <S.Content__wrapper>
          {tojContent()}
          {wordChapter()}
        </S.Content__wrapper>
      </S.Content__block>
    </S.EndTOJPage>
  );
};

export default EndTOJ;
