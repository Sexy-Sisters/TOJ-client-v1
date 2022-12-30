import { useForm } from "react-hook-form";
import auth from "pageContainer/AuthPage/api/auth";
import { ErrorText, LoadingIcon, SuccessText } from "components/common";
import * as I from "pageContainer/AuthPage/interface/signUp";
import * as Auth from "pageContainer/AuthPage/style/AuthPage.style";
import * as SignUp from "../../SignUp.style";
import * as S from "./Email.style";
import { EXCEPTION_MSG } from "shared/constants/message";

const mainColor = "#FDCB6E";
const buttonColor = "#FFDC9C";

const EmailForm = (props: I.ISignUpPage) => {
  const {
    watch,
    setError: setErrorEmail,
    register: registerEmail,
    handleSubmit: submitEmail,
    formState: {
      errors: errorEmail,
      isSubmitSuccessful: successEmail,
      isSubmitting: submittingEmail,
    },
  } = useForm<I.IEmail>();

  const {
    setError: setErrorCode,
    register: registerCode,
    handleSubmit: submitCode,
    formState: { errors: errorCode },
  } = useForm<I.ICodeForm>();

  const onValidEmail = async (data: I.IEmail) => {
    try {
      const { data: res } = (await auth.signUp_email(data)) as I.IEmailResponse;
      if (res.result === "FAIL" && res.message) {
        setErrorEmail("email", { message: res.message }, { shouldFocus: true });
      }
    } catch (e) {
      setErrorEmail("email", { message: EXCEPTION_MSG }, { shouldFocus: true });
    }
  };

  const onValidCode = async (data: I.ICodeForm) => {
    try {
      const APIresponse = (await auth.signUp_code({
        email: watch("email"),
        code: data.code,
      })) as I.ICodeResponse;

      // 인증 코드 유효성 검증
      if (APIresponse.data.data === true) {
        props.signUpData(watch("email"));
        props.nextSection(curSection => curSection + 1);
      }
      if (APIresponse.data.data === false && APIresponse.data.message) {
        setErrorCode(
          "code",
          { message: APIresponse.data.message },
          { shouldFocus: true },
        );
      }
    } catch (err) {
      setErrorCode(
        "code",
        { message: "예상치 못한 에러 발생" },
        { shouldFocus: true },
      );
      console.log(err);
    }
  };

  return (
    <SignUp.PageContainer>
      <SignUp.FormWrapper height="350px">
        <Auth.KindName>이메일 🧛‍♂️</Auth.KindName>

        <S.EmailForm onSubmit={submitEmail(onValidEmail)}>
          <Auth.Input
            disabled={successEmail}
            placeholder="이메일"
            type="email"
            spellCheck="false"
            width="70%"
            border="10px"
            {...registerEmail("email", {
              required: "이메일은 필수 항목입니다",
            })}
          />

          {/* 이메일 인증 폼 상태 텍스트 */}
          <ErrorText
            isError={errorEmail.email ? true : false}
            message={errorEmail.email?.message}
            top={"60px"}
            left={"0"}
          />
          <SuccessText
            isSuccess={successEmail}
            message="성공, 메일함을 확인하세요"
          />

          <Auth.Button
            disabled={successEmail}
            type="submit"
            width="25%"
            border="10px"
            defaultColor={mainColor}
            hoverColor={buttonColor}
          >
            {!submittingEmail && "확인"}
            <LoadingIcon isLoading={submittingEmail} posY="17.5%" posX="40%" />
          </Auth.Button>
        </S.EmailForm>

        <S.CodeForm onSubmit={submitCode(onValidCode)}>
          <Auth.Input
            placeholder="인증 코드"
            width="100%"
            border="10px"
            type="text"
            spellCheck="false"
            {...registerCode("code", {
              required: "메일함에서 인증 코드를 복사해주세요",
            })}
          />

          {/* 인증 코드 폼 상태 텍스트 */}
          <ErrorText
            isError={errorCode.code ? true : false}
            message={errorCode.code?.message}
            top={"60px"}
            left={"0"}
          />

          <Auth.Button
            type="submit"
            width="100%"
            border="10px"
            defaultColor={mainColor}
            hoverColor={buttonColor}
          >
            다음
          </Auth.Button>
        </S.CodeForm>
      </SignUp.FormWrapper>

      <Auth.ColorLine color={mainColor} />
    </SignUp.PageContainer>
  );
};

export default EmailForm;
