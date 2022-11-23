import {
  EndTOJPage,
  StrongText,
  Word,
  Content__block,
  Content__wrapper,
  Title__block,
  Word__block,
  Content,
  Title,
} from "./endTOJ.style";
import {
  TOJ_ADD_TEXT,
  TOJ_STRONG_TEXT,
  TOJ_COLOR,
  J_WORD,
  TITLE,
} from "./endTOJ.constant";

const tojContent = () => {
  return TOJ_STRONG_TEXT.map((toj_strong, i) => (
    <Content key={toj_strong}>
      <StrongText color={TOJ_COLOR[i]}>{toj_strong}</StrongText>
      {TOJ_ADD_TEXT[i]}
    </Content>
  ));
};

const wordChapter = () => {
  return (
    <Word__block>
      {J_WORD.map(word => (
        <Word key={word}>{word}</Word>
      ))}
    </Word__block>
  );
};

const EndTOJ = () => {
  return (
    <EndTOJPage>
      <Title__block>
        <Title>{TITLE}</Title>
      </Title__block>

      <Content__block>
        <Content__wrapper>
          {tojContent()}
          {wordChapter()}
        </Content__wrapper>
      </Content__block>
    </EndTOJPage>
  );
};

export default EndTOJ;
