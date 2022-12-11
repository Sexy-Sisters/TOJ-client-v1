import * as S from "./Join.style";

const JoinModal = () => {
  return (
    <S.Container>
      <S.ModalContainer>
        <S.UIWrapper>
          <S.InputWrapper>
            <S.Text>ㅇㅇㅇㅇㅇ: </S.Text>
            <S.Input />
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Text>ㅇㅇㅇㅇㅇ: </S.Text>
            <S.Input />
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Text>ㅇㅇㅇㅇㅇ: </S.Text>
            <S.Input />
          </S.InputWrapper>

          <S.Button>굿입니다</S.Button>
        </S.UIWrapper>
      </S.ModalContainer>
    </S.Container>
  );
};

export default JoinModal;
