import { useForm } from "react-hook-form";
import { HOME_URL } from "shared/constants/urls";
import { setToken } from "shared/utils/tokenManager";
import auth from "../api/auth";
import * as S from "./SignIn.style";
import * as Auth from "../style/AuthPage.style";
import { ISignIn, ISignInResponse } from "../interface/signIn";
import { useToast } from "shared/hooks";

const mainColor = "#27AE60";
const buttonColor = "#2ECC71";
const title = "TOJ로 시작되는\n혁명가의 길 🧝";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ISignIn>();
  const { onToast } = useToast();

  const onVaild = async (user: ISignIn) => {
    try {
      const { data: res } = (await auth.signIn(user)) as ISignInResponse;

      if (res.result === "SUCCESS") {
        setToken(res.data.accessToken, res.data.refreshToken);
        location.replace(HOME_URL);
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
        <Auth.KindName>{title}</Auth.KindName>

        <Auth.Input
          type="email"
          placeholder="이메일"
          width="100%"
          border="10px"
          {...register("email", {
            required: "이메일은 필수입니다",
          })}
        />

        <Auth.Input
          type="password"
          placeholder="비밀번호"
          width="100%"
          border="10px"
          {...register("password", {
            required: "비밀번호는 필수입니다",
          })}
        />

        <Auth.Button
          disabled={isSubmitting}
          type="submit"
          width="100%"
          border="10px"
          defaultColor={mainColor}
          hoverColor={buttonColor}
        >
          로그인
        </Auth.Button>
      </S.Form>

      <Auth.ColorLine color={mainColor} />
    </S.PageContainer>
  );
};

export default SignInPage;
