import * as S from "./StudentList.style";

const StudentList = () => {
  return (
    <S.Container>
      <S.KindBackground>
        <S.KindButtonWrapper>
          <S.NomalButton>재학생</S.NomalButton>
          <S.WaitingButton>신청대기</S.WaitingButton>
        </S.KindButtonWrapper>
      </S.KindBackground>

      <S.StudentSearch>
        <S.SearchIcon size={16} />
        <S.SearchBar type="search" placeholder="학생 검색" />
      </S.StudentSearch>

      <S.StudentCard>
        <S.profileImg
          src="/image/user_profile.jpeg"
          alt="사용자 프로필"
          width={30}
          height={30}
        />
        <S.InfoWrapper>
          <S.Name>하태경</S.Name>
          <S.Id>2학년 4반 5번</S.Id>
        </S.InfoWrapper>
      </S.StudentCard>
    </S.Container>
  );
};

export default StudentList;
