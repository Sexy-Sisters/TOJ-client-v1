import {
  StudentPage,
  Profile,
  Page__container,
  Profile__nameTag,
  Profile__person,
  NameTag__info,
  Students__Interview,
  Interview__box,
  Interview__wrapper,
  Interview__content,
} from "./Student.style";
import { useInView } from "react-intersection-observer";
import {
  S_CONTENT_URL,
  S_PERSON_URL,
  S_INFO_URL,
} from "components/IntroduceSections/shared/assets";

const Student = () => {
  const [curPage, inView] = useInView({ threshold: 0.001 });

  return (
    <StudentPage ref={curPage}>
      <Page__container>
        <Profile className={inView ? "students-profile" : ""}>
          <Profile__person
            className="person"
            src={S_PERSON_URL}
            alt="피해자 학생들의 실루엣"
          />
          <Profile__nameTag>
            <NameTag__info src={S_INFO_URL} alt="피해자 학생들 정보" />
          </Profile__nameTag>
        </Profile>

        <Students__Interview>
          <Interview__box>
            <Interview__wrapper className="content-wrapper">
              <Interview__content
                className={inView ? "students-content" : ""}
                src={S_CONTENT_URL}
                alt="피해자 학생들의 인터뷰 내용"
              />
            </Interview__wrapper>
          </Interview__box>
        </Students__Interview>
      </Page__container>
    </StudentPage>
  );
};

export default Student;
