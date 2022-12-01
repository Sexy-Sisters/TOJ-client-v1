import { useForm } from "react-hook-form";
import * as G from "pageContainer/AuthPage/SignUp/SignUp.style";
import * as S from "./Email.style";
import auth from "pageContainer/AuthPage/api/auth";
import { IEmail, ICode } from "pageContainer/AuthPage/interface/signUp";
import React, { Dispatch, SetStateAction } from "react";

const mainColor = "#EB2F06";
const buttonColor = "#FF6464";

const EmailForm = (props: {
  nextSection: Dispatch<SetStateAction<number>>;
}) => {
  const [curEmail, setCurEmail] = React.useState<string>("");

  const {
    register: registerEmail,
    handleSubmit: submitEmail,
    formState: { isSubmitting: email },
  } = useForm<IEmail>();

  const {
    register: registerCode,
    handleSubmit: submitCode,
    formState: { isSubmitting: code },
  } = useForm<ICode>();

  const onValidEmail = async (data: IEmail) => {
    try {
      await auth.signUp_email(data);
      setCurEmail(data.email);
    } catch (e) {
      console.log(e);
    }
  };

  const onInValidEmail = () => {};

  const onValidCode = async (data: ICode) => {
    try {
      await auth.signUp_code({
        email: curEmail,
        code: data.code,
      });

      props.nextSection(curSection => curSection + 1);
    } catch (e) {
      console.log(e);
    }
  };

  const onInValidCode = () => {};

  return (
    <G.PageContainer>
      <S.FormWrapper>
        <G.KindName>이메일 Email</G.KindName>

        <S.EmailForm onSubmit={submitEmail(onValidEmail, onInValidEmail)}>
          <G.Input
            placeholder="이메일..."
            width="70%"
            border="15px"
            type="email"
            spellCheck="false"
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
