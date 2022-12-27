import React from "react";
import * as S from "./JoinModal.style";
import * as I from "../../interface/join";
import { useForm } from "react-hook-form";
import school from "../../api/school";
import { SCHOOL_INITIAL, SchoolInitialType } from "./JoinModal.constant";
import { useToast } from "shared/hooks";

const optionList = (start: number, end: number): JSX.Element[] => {
  const list: JSX.Element[] = [];
  for (let i = start; i <= end; i++) {
    list.push(<option key={i}>{i}</option>);
  }
  return list;
};

const JoinModal = (props: I.JoinModalProps) => {
  const { register, handleSubmit } = useForm<I.IStudent>();
  const backgroundRef = React.useRef<HTMLDivElement>(null);
  const { onToast } = useToast();

  const handleClickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backgroundRef.current) {
      props.toggle(curToggle => !curToggle);
    }
  };

  const joinSchool = async () => {
    try {
      const { data: joinRes } = (await school.join_student({
        schoolCode: props.code,
      })) as I.IJoinResponse;

      if (joinRes.result === "SUCCESS") {
        props.toggle(curValue => !curValue);
        onToast("success", "신입생 받아라");
      }
      if (joinRes.result === "FAIL" && joinRes.message) {
        onToast("error", joinRes.message);
      }
    } catch (err) {
      onToast("error", "예상치 못한 에러");
    }
  };

  const onValid = async (payload: I.IStudent) => {
    try {
      const { data: studentRes } = (await school.create_student(
        payload,
      )) as I.IStudentResponse;

      if (studentRes.result === "SUCCESS") {
        joinSchool();
      }
      if (studentRes.result === "FAIL" && studentRes.message) {
        onToast("error", studentRes.message);
      }
    } catch (err) {
      onToast("error", "예상치 못한 에러");
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
