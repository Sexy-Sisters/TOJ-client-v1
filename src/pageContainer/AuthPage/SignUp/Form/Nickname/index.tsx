import * as I from "pageContainer/AuthPage/interface/signUp";
import * as Auth from "pageContainer/AuthPage/style/AuthPage.style";
import * as SignUp from "../../SignUp.style";
import { ErrorText, SuccessText } from "components/common";
import { useRouter } from "next/router";
import auth from "pageContainer/AuthPage/api/auth";
import { validSpace } from "pageContainer/AuthPage/util/validSpace";
import { useForm } from "react-hook-form";
import { SIGN_IN_URL } from "shared/constants/urls";

const mainColor = "#0984E3";
const buttonColor = "#4B9CDB";

const NicknameForm = (props: { email: string; password: string }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitSuccessful },
  } = useForm<I.INickname>();
  const { push } = useRouter();

  const onValid = async ({ nickname }: I.INickname) => {
    // 닉네임 공백 검증
    const validResult = validSpace(nickname.length, nickname, () => {
      setError(
        "nickname",
        { message: "닉네임에 공백을 포함할 수 없습니다" },
        { shouldFocus: true },
      );
    });

    if (validResult === false) {
      const authUser = {
        email: props.email,
        nickname: nickname,
        password: props.password,
      };
      const res = (await auth.signUp(authUser)) as I.ISignUpResponse;

      if (res.data.result === "SUCCESS") {
        push(SIGN_IN_URL);
      }
      if (res.data.result === "FAIL" && res.data.message) {
        setError(
          "nickname",
          { message: res.data.message },
          { shouldFocus: true },
        );
      }
    }
  };

  return (
    <SignUp.PageContainer>
      <SignUp.FormWrapper height="200px">
        <Auth.KindName>{`마지막으로,\n닉네임 🦋`}</Auth.KindName>

        <Auth.Form onSubmit={handleSubmit(onValid)}>
          <Auth.Input
            placeholder="닉네임"
            width="70%"
            border="10px"
            {...register("nickname", {
              required: "닉네임은 필수 항목입니다",
              minLength: {
                value: 2,
                message: "닉네임은 최소 2자 이상입니다",
              },
              maxLength: {
                value: 8,
                message: "닉네임은 최대 8자 이상입니다",
              },
            })}
          />

          {/* 닉네임 폼 상태 텍스트 */}
          <ErrorText
            isError={errors.nickname ? true : false}
            message={errors.nickname?.message}
            top={"60px"}
            left={"0"}
          />
          <SuccessText
            isSuccess={isSubmitSuccessful}
            message="환영합니다! TOJ"
          />

          <Auth.Button
            type="submit"
            width="25%"
            border="10px"
            defaultColor={mainColor}
            hoverColor={buttonColor}
          >
            회원가입
          </Auth.Button>
        </Auth.Form>
      </SignUp.FormWrapper>

      <Auth.ColorLine color={mainColor} />
    </SignUp.PageContainer>
  );
};

export default NicknameForm;
