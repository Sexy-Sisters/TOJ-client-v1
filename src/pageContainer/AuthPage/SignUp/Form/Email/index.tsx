import { useForm } from "react-hook-form";
import auth from "pageContainer/AuthPage/api/auth";
import { ErrorText, LoadingIcon, SuccessText } from "components/common";
import * as I from "pageContainer/AuthPage/interface/signUp";
import * as Auth from "pageContainer/AuthPage/style/AuthPage.style";
import * as SignUp from "../../SignUp.style";
import * as S from "./Email.style";

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
      const APIresponse = (await auth.signUp_email(data)) as I.IEmailResponse;
      if (APIresponse.data.result === "FAIL" && APIresponse.data.message) {
        setErrorEmail(
          "email",
          { message: APIresponse.data.message },
          { shouldFocus: true },
        );
      }
    } catch (e) {
      console.log(e);
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
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignUp.PageContainer>
      <SignUp.FormWrapper height="350px">
        <Auth.KindName>Email 🧛‍♂️</Auth.KindName>

        <S.EmailForm onSubmit={submitEmail(onValidEmail)}>
          <Auth.Input
            disabled={successEmail}
            placeholder="email..."
            type="email"
            spellCheck="false"
            width="70%"
            border="15px"
            {...registerEmail("email", {
              required: "Please enter your email",
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
            message="Sent TOJ code, check your email"
          />

          <Auth.Button
            disabled={successEmail}
            type="submit"
            width="25%"
            border="15px"
            defaultColor={mainColor}
            hoverColor={buttonColor}
          >
            {!submittingEmail && "check"}
            <LoadingIcon isLoading={submittingEmail} posY="17.5%" posX="40%" />
          </Auth.Button>
        </S.EmailForm>

        <S.CodeForm onSubmit={submitCode(onValidCode)}>
          <Auth.Input
            placeholder="auth code..."
            width="100%"
            border="15px"
            type="text"
            spellCheck="false"
            {...registerCode("code", {
              required: "Please enter the auth code",
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
            border="15px"
            defaultColor={mainColor}
            hoverColor={buttonColor}
          >
            Next
          </Auth.Button>
        </S.CodeForm>
      </SignUp.FormWrapper>

      <Auth.ColorLine color={mainColor} />
    </SignUp.PageContainer>
  );
};

export default EmailForm;
