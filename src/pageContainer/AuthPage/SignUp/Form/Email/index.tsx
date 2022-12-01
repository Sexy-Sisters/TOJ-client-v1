import { useForm } from "react-hook-form";
import * as G from "pageContainer/AuthPage/SignUp/SignUp.style";
import * as S from "./Email.style";
import auth from "pageContainer/AuthPage/api/auth";
import {
  IEmailForm,
  ICodeForm,
  ISignUpForm,
} from "pageContainer/AuthPage/interface/signUp";
import React from "react";

const mainColor = "#EB2F06";
const buttonColor = "#FF6464";

const EmailForm = (props: ISignUpForm) => {
  const [curEmail, setCurEmail] = React.useState<string>("");

  const {
    register: registerEmail,
    handleSubmit: submitEmail,
    watch: watchEmail,
    formState: { isSubmitting: email },
  } = useForm<IEmailForm>();

  const {
    register: registerCode,
    handleSubmit: submitCode,
    formState: { isSubmitting: code },
  } = useForm<ICodeForm>();

  const onValidEmail = async (data: IEmailForm) => {
    try {
      await auth.signUp_email(data);
      setCurEmail(data.email);
    } catch (e) {
      console.log(e);
    }
  };

  const onInValidEmail = () => {
    /* todo: 검증 실패시 애니메이션 or alert */
  };

  const onValidCode = async (data: ICodeForm) => {
    try {
      await auth.signUp_code({
        email: curEmail,
        code: data.code,
      });

      props.signUpData(curEmail);
      props.nextSection(curSection => curSection + 1);
    } catch (e) {
      console.log(e);
    }
  };

  const onInValidCode = () => {
    /* todo: 검증 실패시 애니메이션 or alert */
  };

  return (
    <G.PageContainer>
      <S.FormWrapper>
        <G.KindName>이메일 📩</G.KindName>

        <S.EmailForm onSubmit={submitEmail(onValidEmail, onInValidEmail)}>
          <G.Input
            placeholder="이메일..."
            type="email"
            spellCheck="false"
            width="70%"
            border="15px"
            {...registerEmail("email", {
              required: "이메일을 입력해 주세요",
            })}
          />
          <G.Button
            type="submit"
            width="25%"
            border="15px"
            defaultColor={buttonColor}
            hoverColor={mainColor}
            disabled={email}
          >
            확인
          </G.Button>
        </S.EmailForm>

        <S.CodeForm onSubmit={submitCode(onValidCode, onInValidCode)}>
          <G.Input
            placeholder="인증 코드..."
            width="100%"
            border="15px"
            type="text"
            spellCheck="false"
            {...registerCode("code", {
              required: "발급된 인증 코드를 입력해 주세요",
            })}
          />
          <G.Button
            type="submit"
            width="100%"
            border="15px"
            defaultColor={buttonColor}
            hoverColor={mainColor}
            disabled={code}
          >
            코드 인증
          </G.Button>
        </S.CodeForm>
      </S.FormWrapper>

      <G.ColorLine color={mainColor} />
    </G.PageContainer>
  );
};

export default EmailForm;
