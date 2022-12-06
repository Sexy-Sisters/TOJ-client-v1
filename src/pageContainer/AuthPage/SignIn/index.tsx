import * as S from "./SignIn.style";
import * as Auth from "../style/AuthPage.style";
import * as I from "../interface/signIn";
import { useForm } from "react-hook-form";
import { ErrorText } from "../common";
import auth from "../api/auth";
import { useRouter } from "next/router";
import { HOME_URL } from "../../../../shared/constants";
import { setToken } from "../../../../shared/utils/tokenManager";

const mainColor = "#27AE60";
const buttonColor = "#2ECC71";

const SignInPage = () => {
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<I.ISignInForm>();
  const { push } = useRouter();

  const onVaild = async ({ email, password }: I.ISignInForm) => {
    const authUser: I.ISignInAPI = {
      email: email,
      password: password,
    };
    const { data: res } = (await auth.signIn(authUser)) as I.ISignInResponse;

    if (res.result === "SUCCESS") {
      setToken(res.data.accessToken, res.data.refreshToken);
      push(HOME_URL);
    }
    if (res.result === "FAIL" && res.message && res.errorCode) {
      setError(
        res.errorCode,
        {
          message: res.message,
        },
        { shouldFocus: true },
      );
    }
  };

  return (
    <S.PageContainer>
      <S.Form onSubmit={handleSubmit(onVaild)}>
        <Auth.KindName>Sign in 🦖</Auth.KindName>

        <S.InputWrapper>
          <Auth.Input
            type="email"
            placeholder="이메일..."
            width="100%"
            border="15px"
            {...register("email", {
              required: "이메일을 입력해 주세요",
            })}
          />

          <ErrorText
            isError={errors.email ? true : false}
            message={errors.email?.message}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <Auth.Input
            type="password"
            placeholder="비밀번호..."
            width="100%"
            border="15px"
            {...register("password", {
              required: "비밀번호를 입력해 주세요",
            })}
          />

          <ErrorText
            isError={errors.password ? true : false}
            message={errors.password?.message}
          />
        </S.InputWrapper>

        <Auth.Button
          disabled={isSubmitting}
          type="submit"
          width="100%"
          border="15px"
          defaultColor={buttonColor}
          hoverColor={mainColor}
        >
          로그인
        </Auth.Button>
      </S.Form>

      <Auth.ColorLine color={mainColor} />
    </S.PageContainer>
  );
};

export default SignInPage;
