import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { HOME_URL } from "shared/constants/urls";
import { setToken } from "shared/utils/tokenManager";
import auth from "../api/auth";
import * as S from "./SignIn.style";
import * as Auth from "../style/AuthPage.style";
import { ISignIn, ISignInResponse } from "../interface/signIn";
import { useToast } from "shared/hooks";

const mainColor = "#27AE60";
const buttonColor = "#2ECC71";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ISignIn>();
  const { onToast } = useToast();
  const { push } = useRouter();

  const onVaild = async (user: ISignIn) => {
    try {
      const { data: res } = (await auth.signIn(user)) as ISignInResponse;

      if (res.result === "SUCCESS") {
        onToast("success", "sign in successfull");
        setToken(res.data.accessToken, res.data.refreshToken);
        push(HOME_URL);
      }
      if (res.result === "FAIL" && res.message) {
        onToast("error", res.message);
      }
    } catch (err) {
      onToast("error", "예상치 못한 에러");
    }
  };

  const onInValid = async () => {
    const message = errors.email?.message || errors.password?.message;
    if (message) {
      onToast("error", message);
    }
  };

  return (
    <S.PageContainer>
      <S.Form onSubmit={handleSubmit(onVaild, onInValid)}>
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
          defaultColor={mainColor}
          hoverColor={buttonColor}
        >
          Sign in
        </Auth.Button>
      </S.Form>

      <Auth.ColorLine color={mainColor} />
    </S.PageContainer>
  );
};

export default SignInPage;
