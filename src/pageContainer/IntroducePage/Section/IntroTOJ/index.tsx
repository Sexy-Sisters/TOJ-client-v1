import { NoAuth_Header } from "components/layout";
import {
  Title,
  IntroTOJPage,
  Page__titleBlock,
  TitleBlock__wrapper,
  SubTitle,
  Page__UIBlock,
  DescribeMobile,
  UIBlock__yellowCircle,
  UIBlock__blueCircle,
  UIBlock__redCircle,
  UIBlock__greenCircle,
} from "./IntroTOJ.style";

const TITLE = "TOJ";
const SUB_TITLE = "Teacher Online Judge 🧑‍💻";
const DESCRIBE = "모바일은 가로 모드로 동작합니다! 🙏";

const IntroTOJ = () => {
  return (
    <IntroTOJPage>
      {/* 권한에 따라 헤더 */}
      <NoAuth_Header isFixed={false} isTransparent />

      <Page__titleBlock>
        <TitleBlock__wrapper>
          <Title className="title-text">{TITLE}</Title>
          <SubTitle className="sub-text">{SUB_TITLE}</SubTitle>
        </TitleBlock__wrapper>
      </Page__titleBlock>

      <Page__UIBlock>
        <DescribeMobile>{DESCRIBE}</DescribeMobile>

        <UIBlock__yellowCircle />
        <UIBlock__redCircle />
        <UIBlock__blueCircle />
        <UIBlock__greenCircle />
      </Page__UIBlock>
    </IntroTOJPage>
  );
};

export default IntroTOJ;
