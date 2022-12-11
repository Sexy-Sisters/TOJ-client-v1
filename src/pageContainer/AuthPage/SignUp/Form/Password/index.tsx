import { ErrorText, SuccessText } from "components/common";
import { validSpace } from "pageContainer/AuthPage/util/validSpace";
import React from "react";
import { useForm } from "react-hook-form";
import * as I from "pageContainer/AuthPage/interface/signUp";
import * as Auth from "pageContainer/AuthPage/style/AuthPage.style";
import * as S from "./Password.style";
import * as SignUp from "../../SignUp.style";

const mainColor = "#EB2F06";
const buttonColor = "#FF6464";

const PasswordForm = (props: I.ISignUpPage) => {
  const {
    watch,
    setError: setErrorPwd,
    register: pwd,
    handleSubmit: submitPwd,
    formState: { errors: errorPwd, isSubmitSuccessful: successPwd },
  } = useForm<I.IPwd>();

  const {
    setError: setErrorRePwd,
    register: rePwd,
    handleSubmit: submitRePwd,
    formState: { errors: errorRePwd },
  } = useForm<I.IRePwd>();

  const onValidPwd = (data: I.IPwd) => {
    // 공백 확인 검증
    validSpace(data.password.length, data.password, () => {
      setErrorPwd(
        "password",
        { message: "Password can't contain spaces" },
        { shouldFocus: true },
      );
    });
  };

  const onValidRePwd = (data: I.IRePwd) => {
    if (watch("password") === data.rePassword) {
      props.signUpData(watch("password"));
      props.nextSection(curSection => curSection + 1);
    } else {
      // 비밀번호 1, 2차가 다른 경우 예외 처리
      setErrorRePwd(
        "rePassword",
        { message: "The password is different" },
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
            placeholder="password..."
            type="password"
            width="70%"
            border="15px"
            {...pwd("password", {
              required: "Please enter your password",
              minLength: {
                value: 8,
                message: "Least 8 characters long",
              },
              maxLength: {
                value: 20,
                message: "No more than 20 characters.",
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
            message="The password is available"
          />

          <Auth.Button
            disabled={successPwd}
            type="submit"
            width="25%"
            border="15px"
            defaultColor={mainColor}
            hoverColor={buttonColor}
          >
            check
          </Auth.Button>
        </Auth.Form>

        <S.RePasswordForm onSubmit={submitRePwd(onValidRePwd)}>
          <Auth.Input
            placeholder="Re-enter password..."
            type="password"
            width="100%"
            border="15px"
            {...rePwd("rePassword", {
              required: "Please re-enter password",
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
            defaultColor={mainColor}
            hoverColor={buttonColor}
          >
            Next
          </Auth.Button>
        </S.RePasswordForm>
      </SignUp.FormWrapper>

      <Auth.ColorLine color={mainColor} />
    </SignUp.PageContainer>
  );
};

export default PasswordForm;
