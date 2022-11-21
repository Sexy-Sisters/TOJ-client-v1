import {
  Box,
  Container,
  NameTag,
  ContentBox,
  PrincipalPage,
  Content,
  ContentWrapper,
  Person,
  PersonInfo,
  Profile,
} from "./Principal.style";
import { useInView } from "react-intersection-observer";

const content_url = "/img/principal_content.png";
const person_url = "/img/principal.svg";
const info_url = "/img/principal_info.png";

export default function InterviewPricipal() {
  const [curPage, inView] = useInView({ threshold: 0.1 });

  return (
    <PrincipalPage ref={curPage}>
      <Container>
        <Profile className={inView ? "principal_profile" : ""}>
          <Person className="person" src={person_url} alt="교장의 실루엣" />
          <NameTag>
            <PersonInfo src={info_url} alt="교장 정보" />
          </NameTag>
        </Profile>

        <Box className={inView ? "principal_contentBox" : ""}>
          <ContentBox>
            <ContentWrapper className="content">
              <Content
                className={inView ? "principal_contentText" : ""}
                src={content_url}
                alt="교장의 인터뷰 내용"
              />
            </ContentWrapper>
          </ContentBox>
        </Box>
      </Container>
    </PrincipalPage>
  );
}
