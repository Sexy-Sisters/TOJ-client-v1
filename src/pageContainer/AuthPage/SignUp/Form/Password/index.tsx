import { ErrorText, SuccessText } from "../../../common";
import {
  IPwdForm,
  IRePwdForm,
  ISignUpForm,
} from "pageContainer/AuthPage/interface/signUp";
import { validSpace } from "pageContainer/AuthPage/util/validSpace";
import React from "react";
import { useForm } from "react-hook-form";
import * as Auth from "pageContainer/AuthPage/style/AuthPage.style";
import * as S from "./Password.style";
import * as SignUp from "../../SignUp.style";

const mainColor = "#EB2F06";
const buttonColor = "#FF6464";

const PasswordForm = (props: ISignUpForm) => {
  const {
    watch,
    setError: setErrorPwd,
    register: pwd,
    handleSubmit: submitPwd,
    formState: { errors: errorPwd, isSubmitSuccessful: successPwd },
  } = useForm<IPwdForm>();

  const {
    setError: setErrorRePwd,
    register: rePwd,
    handleSubmit: submitRePwd,
    formState: { errors: errorRePwd },
  } = useForm<IRePwdForm>();

  const onValidPwd = (data: IPwdForm) => {
    // 공백 확인 검증
    validSpace(data.password.length, data.password, () => {
      setErrorPwd(
        "password",
        { message: "비밀번호에 공백을 포함할 수 없어요" },
        { shouldFocus: true },
      );
    });
  };

  const onValidRePwd = (data: IRePwdForm) => {
    if (watch("password") === data.rePassword) {
      props.signUpData(watch("password"));
      props.nextSection(curSection => curSection + 1);
    } else {
      // 비밀번호 1, 2차가 다른 경우 예외 처리
      setErrorRePwd(
        "rePassword",
        { message: "비밀번호가 달라요" },
        { shouldFocus: true },
      );
    }
  };

  return (
    <SignUp.PageContainer>
      <SignUp.FormWrapper height="350px">
        <Auth.KindName>Password 👺</Auth.KindName>

        <Auth.Form onSubmit={submitPwd(onValidPwd)}>
          <Auth.Input
            disabled={successPwd}
            placeholder="비밀번호..."
            type="password"
            width="70%"
            border="15px"
            {...pwd("password", {
              required: "비밀번호를 입력해 주세요",
              minLength: {
                value: 8,
                message: "비밀번호는 8자 이상으로 해주세요",
              },
              maxLength: {
                value: 20,
                message: "비밀번호는 20자 이하로 해주세요",
              },
            })}
          />
          {/* 1차 비밀번호 폼 상태 텍스트 */}
          <ErrorText
            isError={errorPwd.password ? true : false}
            message={errorPwd.password?.message}
          />
          <SuccessText
            isSuccess={successPwd}
            message="사용 가능한 비밀번호 입니다"
          />

          <Auth.Button
            disabled={successPwd}
            type="submit"
            width="25%"
            border="15px"
            defaultColor={buttonColor}
            hoverColor={mainColor}
          >
            확인
          </Auth.Button>
        </Auth.Form>

        <S.RePasswordForm onSubmit={submitRePwd(onValidRePwd)}>
          <Auth.Input
            placeholder="비밀번호 재입력..."
            type="password"
            width="100%"
            border="15px"
            {...rePwd("rePassword", {
              required: "비밀번호를 다시 입력해 주세요",
            })}
          />

          {/* 2차 비밀번호 폼 상태 텍스트  */}
          <ErrorText
            isError={errorRePwd.rePassword ? true : false}
            message={errorRePwd.rePassword?.message}
          />

          <Auth.Button
            type="submit"
            width="100%"
            border="15px"
            defaultColor={buttonColor}
            hoverColor={mainColor}
          >
            저장
          </Auth.Button>
        </S.RePasswordForm>
      </SignUp.FormWrapper>

      <Auth.ColorLine color={mainColor} />
    </SignUp.PageContainer>
  );
};

export default PasswordForm;
