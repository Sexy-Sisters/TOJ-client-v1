import { useForm } from "react-hook-form";
import { ErrorText } from "components/common";
import { useRouter } from "next/router";
import { HOME_URL } from "../../../../shared/constants/urls";
import { setToken } from "../../../../shared/utils/tokenManager";
import auth from "../api/auth";
import * as S from "./SignIn.style";
import * as Auth from "../style/AuthPage.style";
import { ISignIn, ISignInResponse } from "../interface/signIn";

const mainColor = "#27AE60";
const buttonColor = "#2ECC71";

const SignInPage = () => {
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISignIn>();
  const { push } = useRouter();

  const onVaild = async ({ email, password }: ISignIn) => {
    const authUser: ISignIn = {
      email: email,
      password: password,
    };
    const { data: res } = (await auth.signIn(authUser)) as ISignInResponse;

    if (res.result === "SUCCESS") {
      setToken(res.data.accessToken, res.data.refreshToken);
      push(HOME_URL);
    }
    if (res.result === "FAIL" && res.message) {
      setError("email", {
        message: res.message,
      });
    }
  };

  return (
    <S.PageContainer>
      <S.ErrorBox>
        <ErrorText
          isError={errors.email || errors.password ? true : false}
          message={
            errors.password
              ? "이메일과 비밀번호를 다시 확인해 봅시다"
              : errors.email?.message
          }
        />
      </S.ErrorBox>

      <S.Form onSubmit={handleSubmit(onVaild)}>
        <Auth.KindName>Sign in to TOJ 🦖</Auth.KindName>

        <Auth.Input
          type="email"
          placeholder="email..."
          width="100%"
          border="15px"
          {...register("email", {
            required: "Please enter your email",
          })}
        />

        <Auth.Input
          type="password"
          placeholder="password..."
          width="100%"
          border="15px"
          {...register("password", {
            required: "Please enter your password",
          })}
        />

        <Auth.Button
          disabled={isSubmitting}
          type="submit"
          width="100%"
          border="15px"
          defaultColor={buttonColor}
          hoverColor={mainColor}
        >
          Sign in
        </Auth.Button>
      </S.Form>

      <Auth.ColorLine color={mainColor} />
    </S.PageContainer>
  );
};

export default SignInPage;
