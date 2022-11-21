import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  TitleText,
  TitleBox,
  EndTOJPage,
  ContentBox,
  ContentText,
  StrongText,
  ContentWrapper,
  WordsBox,
  Word,
} from "./EndTOJ.style";

const title = "👩‍🏫 ♻️ 👨‍🎓 선생님과 학생의\n의존성 역전의 시작";

const tojColor = ["#EB2F06", "#FDCB6E", "#0984E3"];
const tojText = ["T", "O", "J"];
const addText = [" eacher", " ♻️", ""];
const words = ["ustices", "uggernaut", "uxtaposed"];

const tojContent = () => {
  return tojText.map((text, i) => (
    <ContentText key={text}>
      <StrongText color={tojColor[i]}>{text}</StrongText>
      {addText[i]}
    </ContentText>
  ));
};

const wordChapter = () => {
  return (
    <WordsBox>
      {words.map(word => (
        <Word key={word}>{word}</Word>
      ))}
    </WordsBox>
  );
};

export default function EndTOJ() {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && typeof window !== "undefined") {
      // location.replace("/introduce");
    }
  }, [inView]);

  return (
    <EndTOJPage ref={ref}>
      <TitleBox>
        <TitleText>{title}</TitleText>
      </TitleBox>

      <ContentBox>
        <ContentWrapper>
          {tojContent()}
          {wordChapter()}
        </ContentWrapper>
      </ContentBox>
    </EndTOJPage>
  );
}
