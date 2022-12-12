import { useForm } from "react-hook-form";
import { IInitialSchool } from "../interface/main";
import * as S from "./Join.style";

type SchoolInitialType = "초등학교" | "중학교" | "고등학교" | "공동실습소";

const SCHOOL_INITIAL = {
  초등학교: { age: { start: 8, end: 13 }, grade: 6 },
  중학교: { age: { start: 14, end: 16 }, grade: 3 },
  고등학교: { age: { start: 17, end: 19 }, grade: 3 },
  공동실습소: { age: { start: 17, end: 19 }, grade: 3 },
};

const optionList = (start: number, end: number): JSX.Element[] => {
  const list: JSX.Element[] = [];
  for (let i = start; i <= end; i++) {
    list.push(<option key={i}>{i}</option>);
  }
  return list;
};

const JoinModal = (props: IInitialSchool) => {
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
              {optionList(
                SCHOOL_INITIAL[props.grade as SchoolInitialType].age.start,
                SCHOOL_INITIAL[props.grade as SchoolInitialType].age.end,
              )}
            </S.Select>
            <S.Text>years old</S.Text>
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Text>I'm in the</S.Text>
            <S.Select width="30%" {...register("grade")}>
              {optionList(
                1,
                SCHOOL_INITIAL[props.grade as SchoolInitialType].grade,
              )}
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
