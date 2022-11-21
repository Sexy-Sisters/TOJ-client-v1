import { Person, ResultPage, ResultTitle, VictimWrapper } from "./Result.style";
import { useInView } from "react-intersection-observer";

const person_url = "/img/victim.jpeg";
const result_title = "12시에 공부하러\n내려갔다가 선도 갔습니다 🤦‍♂️";

export default function Result() {
  const [curPage, inView] = useInView({ threshold: 0.1 });

  return (
    <ResultPage ref={curPage}>
      <VictimWrapper className="wrapper">
        <ResultTitle className={inView ? "title" : ""}>
          {result_title}
        </ResultTitle>
        <Person
          className={inView ? "victim" : ""}
          src={person_url}
          alt={"피해자 학생의 벌 받는 사진"}
        />
      </VictimWrapper>
    </ResultPage>
  );
}
