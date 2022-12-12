import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as S from "./Join.style";

const optionList = (start: number, end: number): JSX.Element[] => {
  const list: JSX.Element[] = [];
  for (let i = start; i <= end; i++) {
    list.push(<option key={i}>{i}</option>);
  }
  return list;
};

const JoinModal = () => {
  const { query } = useRouter();
  const { register, handleSubmit } = useForm();

  const onValid = () => {};

  return (
    <S.Container>
      <S.ModalContainer>
        <S.DecoContainer>
          <S.DecoWrapper>
            <S.DecoSpring />
            <S.DecoSpring />
            <S.DecoSpring />
            <S.DecoEmoji>✍️</S.DecoEmoji>
          </S.DecoWrapper>
        </S.DecoContainer>

        <S.UIWrapper onSubmit={handleSubmit(onValid)}>
          <S.InputWrapper>
            <S.Text>I'm</S.Text>
            <S.Select width="40%" {...register("age")}>
              {optionList(8, 19)}
            </S.Select>
            <S.Text>years old</S.Text>
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Text>I'm in the</S.Text>
            <S.Select width="30%" {...register("grade")}>
              {optionList(1, 6)}
            </S.Select>
            <S.Text>grade</S.Text>
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Text>I'm in class</S.Text>
            <S.Select width="50%" {...register("classroom")}>
              {optionList(1, 20)}
            </S.Select>
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Text>I'm number</S.Text>
            <S.Select width="50%" {...register("number")}>
              {optionList(1, 100)}
            </S.Select>
          </S.InputWrapper>

          <S.Button type="submit">Submit</S.Button>
        </S.UIWrapper>
      </S.ModalContainer>
    </S.Container>
  );
};

export default JoinModal;
