import {
  Box,
  Container,
  NameTag,
  ContentBox,
  StudentPage,
  Content,
  ContentWrapper,
  Person,
  PersonInfo,
  Profile,
} from "./Student.style";
import { useInView } from "react-intersection-observer";

const content_url = "/img/students_content.png";
const person_url = "/img/students.svg";
const info_url = "/img/students_info.png";

export default function InterviewStudent() {
  const [curPage, inView] = useInView({ threshold: 0.1 });

  return (
    <StudentPage ref={curPage}>
      <Container>
        <Profile className={inView ? "students_profile" : ""}>
          <Person
            className="person"
            src={person_url}
            alt="피해자 학생들의 실루엣"
          />
          <NameTag>
            <PersonInfo src={info_url} alt="피해자 학생들 정보" />
          </NameTag>
        </Profile>

        <Box>
          <ContentBox>
            <ContentWrapper className="content_wrapper">
              <Content
                className={inView ? "students_content" : ""}
                src={content_url}
                alt="피해자 학생들의 인터뷰 내용"
              />
            </ContentWrapper>
          </ContentBox>
        </Box>
      </Container>
    </StudentPage>
  );
}
