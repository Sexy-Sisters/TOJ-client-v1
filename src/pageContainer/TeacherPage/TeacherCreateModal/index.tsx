import React from "react";
import * as S from "./TeacherCreateModal.style";

interface ITeacherCreateModalProps {
  modalState: boolean;
  modalToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const TeacherCreateModal = (props: ITeacherCreateModalProps) => {
  const backgroundRef = React.useRef<HTMLDivElement>(null);

  const handleClickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backgroundRef.current) {
      props.modalToggle(curState => !curState);
    }
  };

  return (
    <S.Container modalState={props.modalState}>
      <S.BackgroundContainer
        ref={backgroundRef}
        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
          handleClickBackground(e)
        }
      />
      <S.ModalContainer>
        <S.ProfileWrapper>
          <S.ProfileImg
            src="/image/user_profile.jpeg"
            width={100}
            height={100}
            alt="선생님 프로필 사진"
          />

          <S.NameWrapper>
            <S.NickNameInput />
            <S.NameInput />
          </S.NameWrapper>
        </S.ProfileWrapper>

        <S.BioInput />
      </S.ModalContainer>
    </S.Container>
  );
};

export default TeacherCreateModal;
