import React from "react";
import * as S from "./TeacherPage.style";
import TeacherList from "./TeacherList";
import TeacherCreateModal from "./TeacherCreateModal";

const TeacherPage = () => {
  const bodyRef = React.useRef<HTMLCollectionOf<HTMLBodyElement> | null>(null);
  const [modalState, modalToggle] = React.useState<boolean>(false);

  React.useEffect(() => {
    bodyRef.current = document.getElementsByTagName("body");
    bodyRef.current[0].style.overflow = "scroll";
  }, []);

  return (
    <S.Container>
      <TeacherCreateModal modalState={modalState} modalToggle={modalToggle} />

      <S.TeacherCreateButton onClick={() => modalToggle(true)}>
        선생님 추가
      </S.TeacherCreateButton>
      <TeacherList />
    </S.Container>
  );
};

export default TeacherPage;
