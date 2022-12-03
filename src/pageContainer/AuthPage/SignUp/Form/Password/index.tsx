import {
  IPwdForm,
  IRePwdForm,
  ISignUpForm,
} from "pageContainer/AuthPage/interface/signUp";
import React from "react";
import { useForm } from "react-hook-form";
import * as G from "../../SignUp.style";
import * as S from "./Password.style";

const mainColor = "#FDCB6E";
const buttonColor = "#FFDC9C";

const PasswordForm = (props: ISignUpForm) => {
  const [curPwd, setCurPwd] = React.useState<string>("");
  const { register: pwd, handleSubmit: submitPwd } = useForm<IPwdForm>();
  const { register: rePwd, handleSubmit: submitRePwd } = useForm<IRePwdForm>();

  const onValidPwd = (data: IPwdForm) => {
    setCurPwd(data.password);
  };

  const onInValidPwd = () => {
    console.log("예외처리");
  };

  const onValidRePwd = (data: IRePwdForm) => {
    if (curPwd === data.rePassword) {
      props.signUpData(curPwd);
      props.nextSection(curSection => curSection + 1);
    } else {
      // todo: 비밀번호 1, 2차가 다른 경우 예외 처리
    }
  };

  const onInValidRePwd = () => {
    console.log("예외처리");
  };

  return (
    <G.PageContainer>
      <G.FormWrapper height="350px">
        <G.KindName>비밀번호 🔐</G.KindName>

        <G.Form onSubmit={submitPwd(onValidPwd, onInValidPwd)}>
          <G.Input
            placeholder="비밀번호..."
            type="password"
            width="70%"
            border="15px"
            {...pwd("password", {
              required: "비밀번호를 입력해 주세요",
              minLength: 8,
              maxLength: 20,
            })}
          />
          <G.Button
            type="submit"
            width="25%"
            border="15px"
            defaultColor={buttonColor}
            hoverColor={mainColor}
          >
            확인
          </G.Button>
        </G.Form>

        <S.RePasswordForm onSubmit={submitRePwd(onValidRePwd, onInValidRePwd)}>
          <G.Input
            placeholder="비밀번호 재입력..."
            type="password"
            width="100%"
            border="15px"
            {...rePwd("rePassword", {
              required: "비밀번호를 입력해 주세요",
              minLength: 8,
              maxLength: 20,
            })}
          />
          <G.Button
            type="submit"
            width="100%"
            border="15px"
            defaultColor={buttonColor}
            hoverColor={mainColor}
          >
            저장
          </G.Button>
        </S.RePasswordForm>
      </G.FormWrapper>

      <G.ColorLine color={mainColor} />
    </G.PageContainer>
  );
};

export default PasswordForm;
