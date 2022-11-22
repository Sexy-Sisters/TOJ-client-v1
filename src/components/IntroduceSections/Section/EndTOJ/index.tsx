import {
  EndTOJPage,
  ContentText,
  StrongText,
  Word,
  Content__box,
  Content__wrapper,
  Title__box,
  WordBox,
  Title,
} from "./EndTOJ.style";

const TITLE: string = "👩‍🏫 ♻️ 👨‍🎓 선생님과 학생의\n의존성 역전의 시작";

const TOJ_COLOR: string[] = ["#EB2F06", "#FDCB6E", "#0984E3"];
const TOJ_STRONG_TEXT: string[] = ["T", "O", "J"];
const TOJ_ADD_TEXT: string[] = [" eacher", " ♻️", ""];
const J_WORD: string[] = ["ustices", "uggernaut", "uxtaposed"];

const tojContent = () => {
  return TOJ_STRONG_TEXT.map((toj_strong, i) => (
    <ContentText key={toj_strong}>
      <StrongText color={TOJ_COLOR[i]}>{toj_strong}</StrongText>
      {TOJ_ADD_TEXT[i]}
    </ContentText>
  ));
};

const wordChapter = () => {
  return (
    <WordBox>
      {J_WORD.map(word => (
        <Word key={word}>{word}</Word>
      ))}
    </WordBox>
  );
};

export default function EndTOJ() {
  return (
    <EndTOJPage>
      <Title__box>
        <Title>{TITLE}</Title>
      </Title__box>

      <Content__box>
        <Content__wrapper>
          {tojContent()}
          {wordChapter()}
        </Content__wrapper>
      </Content__box>
    </EndTOJPage>
  );
}
