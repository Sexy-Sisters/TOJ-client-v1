import React from "react";
import school from "pageContainer/SchoolPage/api/school";
import {
  ENGAGED,
  IStudentCard,
  IStudentListResponse,
  studentType,
  WAITING,
} from "pageContainer/SchoolPage/interface/main";
import * as S from "./StudentList.style";

const StudentList = () => {
  const [studentState, setStudentState] = React.useState<studentType>(ENGAGED);
  const [studentListData, setStudentListData] = React.useState<
    IStudentCard[] | null
  >(null);

  React.useEffect(() => {
    async function getStudentList() {
      const { data: res } = (await school.list_student({
        status: studentState,
      })) as IStudentListResponse;

      if (res.result === "SUCCESS") {
        setStudentListData(res.data);
      }
    }
    getStudentList();
  }, [studentState]);

  return (
    <S.Container>
      <S.KindBackground>
        <S.KindButtonWrapper>
          <S.NomalButton
            click={studentState === ENGAGED ? true : false}
            onClick={() => setStudentState(ENGAGED)}
          >
            재학생
          </S.NomalButton>
          <S.WaitingButton
            click={studentState === WAITING ? true : false}
            onClick={() => setStudentState(WAITING)}
          >
            신청대기
          </S.WaitingButton>
        </S.KindButtonWrapper>
      </S.KindBackground>

      <S.StudentSearch>
        <S.SearchIcon size={16} />
        <S.SearchBar type="search" placeholder="학생 검색" />
      </S.StudentSearch>

      {studentListData?.map(student => (
        <S.StudentCard>
          <S.profileImg
            src={student.profileImg}
            alt="학생 프로필"
            width={40}
            height={40}
          />
          <S.InfoWrapper>
            <S.Name>{student.nickname}</S.Name>
            <S.Id>
              {student.grade}학년 {student.classroom}반 {student.number}번
            </S.Id>
          </S.InfoWrapper>
        </S.StudentCard>
      ))}
    </S.Container>
  );
};

export default StudentList;
