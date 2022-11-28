import { useInView } from "react-intersection-observer";
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
import {
  P_CONTENT_URL,
  P_INFO_URL,
  P_PERSON_URL,
} from "components/IntroduceSections/shared/assets";

const Principal = () => {
  const [curPage, inView] = useInView({ threshold: 0.001 });

  return (
    <PrincipalPage ref={curPage}>
      <Page__container>
        <Profile className={inView ? "interviewee-profile" : ""}>
          <Profile__person
            className="interviewee-person"
            src={P_PERSON_URL}
            alt="교장의 실루엣"
          />
          <Profile__nameTag>
            <NameTag__info src={P_INFO_URL} alt="교장 정보" />
          </Profile__nameTag>
        </Profile>

        <Principal__interview className={inView ? "interview" : ""}>
          <Interview__box>
            <Interview__wrapper className="interview-content">
              <Interview__content
                className={inView ? "interview-content-text" : ""}
                src={P_CONTENT_URL}
                alt="교장의 인터뷰 내용"
              />
            </Interview__wrapper>
          </Interview__box>
        </Principal__interview>
      </Page__container>
    </PrincipalPage>
  );
};

export default Principal;
