import {
  Victim__person,
  Victim__title,
  Victim,
  ResultPage,
} from "./Result.style";
import { useInView } from "react-intersection-observer";

const TITLE = "12시에 공부하러\n내려갔다가 선도 갔습니다 🤦‍♂️";
const PERSON_URL = "/img/victim.jpeg";

export default function Result() {
  const [curPage, inView] = useInView({ threshold: 0.1 });

  return (
    <ResultPage ref={curPage}>
      <Victim className="victim">
        <Victim__title className={inView ? "victim-title" : ""}>
          {TITLE}
        </Victim__title>
        <Victim__person
          className={inView ? "victim-person" : ""}
          src={PERSON_URL}
          alt={"피해자 학생의 벌 받는 사진"}
        />
      </Victim>
    </ResultPage>
  );
}
