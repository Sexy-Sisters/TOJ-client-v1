import {
  Page__container,
  PrincipalPage,
  Profile__nameTag,
  Profile__person,
  NameTag__info,
  Profile,
  Interview__box,
  Interview__wrapper,
  Interview__content,
  Principal__interview,
} from "./Principal.style";
import { useInView } from "react-intersection-observer";

const CONTENT_URL = "/img/principal_content.png";
const PERSON_URL = "/img/principal.svg";
const INFO_URL = "/img/principal_info.png";

export default function InterviewPricipal() {
  const [curPage, inView] = useInView({ threshold: 0.1 });

  return (
    <PrincipalPage ref={curPage}>
      <Page__container>
        <Profile className={inView ? "interviewee-profile" : ""}>
          <Profile__person
            className="interviewee-person"
            src={PERSON_URL}
            alt="교장의 실루엣"
          />
          <Profile__nameTag>
            <NameTag__info src={INFO_URL} alt="교장 정보" />
          </Profile__nameTag>
        </Profile>

        <Principal__interview className={inView ? "interview" : ""}>
          <Interview__box>
            <Interview__wrapper className="interview-content">
              <Interview__content
                className={inView ? "interview-content-text" : ""}
                src={CONTENT_URL}
                alt="교장의 인터뷰 내용"
              />
            </Interview__wrapper>
          </Interview__box>
        </Principal__interview>
      </Page__container>
    </PrincipalPage>
  );
}
