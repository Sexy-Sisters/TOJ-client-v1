import {
  CircleWrapper,
  TitleText,
  TitleWrapper,
  SubText,
  YellowCircle,
  RedCircle,
  BlueCircle,
  GreenCircle,
  Container,
  TextBundle,
  IntroTOJPage,
  DescriptionText,
} from "./IntroTOJ.style";

const title = "TOJ";
const sub_title = "Teacher Online Judge 🧑‍💻";
const description = "모바일은 가로 모드로 동작합니다! 🙏";

export default function IntroTOJ() {
  return (
    <IntroTOJPage>
      <Container>
        <TitleWrapper>
          <TextBundle>
            <TitleText className="titleText">{title}</TitleText>
            <SubText className="subText">{sub_title}</SubText>
          </TextBundle>
        </TitleWrapper>

        <CircleWrapper>
          <DescriptionText>{description}</DescriptionText>

          <YellowCircle />
          <RedCircle />
          <BlueCircle />
          <GreenCircle />
        </CircleWrapper>
      </Container>
    </IntroTOJPage>
  );
}
