import React from "react";
import * as S from "./SideManager.style";
import school from "pageContainer/SchoolPage/api/school";
import {
  ENGAGED,
  IStudentCard,
  IStudentListResponse,
  studentType,
  WAITING,
} from "pageContainer/SchoolPage/interface/main";
import { useRouter } from "next/router";
import { TEACHER_URL } from "shared/constants/urls";

const Sidebar = () => {
  const [studentState, setStudentState] = React.useState<studentType>(ENGAGED);
  const [studentListData, setStudentListData] = React.useState<
    IStudentCard[] | null
  >(null);
  const { push } = useRouter();

  React.useEffect(() => {
    async function getStudentList() {
      try {
        const { data: res } = (await school.list_student({
          status: studentState,
        })) as IStudentListResponse;

        if (res.result === "SUCCESS" && res.data[0]) {
          setStudentListData(res.data);
        } else {
          setStudentListData(null);
        }
      } catch (e) {}
    }
    getStudentList();
  }, [studentState]);

  const approveStudent = async (id: number) => {
    try {
      const res = await school.approve_student({
        applicantId: id,
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.Container>
      <S.KindBackground>
        <S.TeacherPageButton
          onClick={() => {
            push(TEACHER_URL);
          }}
        >
          학교 선생님
        </S.TeacherPageButton>

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

      <S.StudentList>
        {studentListData ? (
          studentListData.map(student => (
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

              {studentState === WAITING && (
                <S.ApproveButton onClick={() => approveStudent(student.id)}>
                  수락
                </S.ApproveButton>
              )}
            </S.StudentCard>
          ))
        ) : (
          <S.NullText>없음</S.NullText>
        )}
      </S.StudentList>
    </S.Container>
  );
};

export default Sidebar;
