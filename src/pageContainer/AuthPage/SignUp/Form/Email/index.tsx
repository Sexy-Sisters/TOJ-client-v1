import { useForm } from "react-hook-form";
import auth from "pageContainer/AuthPage/api/auth";
import { ErrorText, LoadingIcon, SuccessText } from "components/common";
import * as I from "pageContainer/AuthPage/interface/signUp";
import * as G from "pageContainer/AuthPage/SignUp/SignUp.style";
import * as S from "./Email.style";

const mainColor = "#EB2F06";
const buttonColor = "#FF6464";

const EmailForm = (props: I.ISignUpForm) => {
  const {
    watch,
    register: registerEmail,
    handleSubmit: submitEmail,
    formState: {
      errors: errorEmail,
      isSubmitSuccessful: successEmail,
      isSubmitting: submittingEmail,
    },
  } = useForm<I.IEmailForm>();

  const {
    setError,
    register: registerCode,
    handleSubmit: submitCode,
    formState: { errors: errorCode },
  } = useForm<I.ICodeForm>();

  const onValidEmail = async (data: I.IEmailForm) => {
    try {
      const response = (await auth.signUp_email(data)) as I.IEmailResponse;
    } catch (e) {
      console.log(e);
    }
  };

  const onValidCode = async (data: I.ICodeForm) => {
    try {
      const response = (await auth.signUp_code({
        email: watch("email"),
        code: data.code,
      })) as I.ICodeResponse;

      // 유효한 코드인지 검증
      if (response.data.data === true) {
        props.signUpData(watch("email"));
        props.nextSection(curSection => curSection + 1);
      } else {
        setError(
          "code",
          { message: "코드가 일치하지 않아요" },
          { shouldFocus: true },
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <G.PageContainer>
      <G.FormWrapper height="350px">
        <G.KindName>이메일 📩</G.KindName>

        <S.EmailForm onSubmit={submitEmail(onValidEmail)}>
          <G.Input
            disabled={successEmail}
            placeholder="이메일..."
            type="email"
            spellCheck="false"
            width="70%"
            border="15px"
            {...registerEmail("email", {
              required: "이메일을 입력해 주세요",
            })}
          />

          {/* 이메일 인증 폼 상태 텍스트 */}
          <ErrorText
            isError={errorEmail.email ? true : false}
            message={errorEmail.email?.message + " 💁‍♂️"}
          />
          <SuccessText
            isSuccess={successEmail}
            message="TOJ 이메일 인증 코드가 전송 됐어요 ✨"
          />

          <G.Button
            disabled={successEmail}
            type="submit"
            width="25%"
            border="15px"
            defaultColor={buttonColor}
            hoverColor={mainColor}
          >
            {!submittingEmail && "확인"}
            <LoadingIcon isLoading={submittingEmail} posY="17.5%" posX="40%" />
          </G.Button>
        </S.EmailForm>

        <S.CodeForm onSubmit={submitCode(onValidCode)}>
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

          {/* 인증 코드 폼 상태 텍스트 */}
          <ErrorText
            isError={errorCode.code ? true : false}
            message={errorCode.code?.message + " 💁‍♂️"}
          />

          <G.Button
            type="submit"
            width="100%"
            border="15px"
            defaultColor={buttonColor}
            hoverColor={mainColor}
          >
            코드 인증
          </G.Button>
        </S.CodeForm>
      </G.FormWrapper>

      <G.ColorLine color={mainColor} />
    </G.PageContainer>
  );
};

export default EmailForm;
