import { ErrorText, SuccessText } from "components/common";
import { useRouter } from "next/router";
import auth from "pageContainer/AuthPage/api/auth";
import { validSpace } from "pageContainer/AuthPage/util/validSpace";
import { useForm } from "react-hook-form";
import * as I from "pageContainer/AuthPage/interface/signUp";
import * as Auth from "pageContainer/AuthPage/style/AuthPage.style";
import * as SignUp from "../../SignUp.style";

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

  const onValid = async (data: I.INickname) => {
    // 닉네임 공백 검증
    const validResult = validSpace(data.nickname.length, data.nickname, () => {
      setError(
        "nickname",
        { message: "Nickname can't contain spaces" },
        { shouldFocus: true },
      );
    });

    if (validResult === false) {
      const authUser = {
        email: props.email,
        nickname: data.nickname,
        password: props.password,
      };
      const APIresponse = (await auth.signUp(authUser)) as I.ISignUpResponse;

      if (APIresponse.data.result === "SUCCESS") {
        push("signIn");
      }
      if (APIresponse.data.result === "FAIL" && APIresponse.data.message) {
        setError(
          "nickname",
          { message: APIresponse.data.message },
          { shouldFocus: true },
        );
      }
    }
  };

  return (
    <SignUp.PageContainer>
      <SignUp.FormWrapper height="200px">
        <Auth.KindName>{`Last,\nNickname 🦋`}</Auth.KindName>

        <Auth.Form onSubmit={handleSubmit(onValid)}>
          <Auth.Input
            placeholder="nickname..."
            width="70%"
            border="15px"
            {...register("nickname", {
              required: "Please enter your nickname",
              minLength: {
                value: 2,
                message: "Please enter at least 2 characters",
              },
              maxLength: {
                value: 8,
                message: "Please enter no more than 8 characters.",
              },
            })}
          />

          {/* 닉네임 폼 상태 텍스트 */}
          <ErrorText
            isError={errors.nickname ? true : false}
            message={errors.nickname?.message}
          />
          <SuccessText
            isSuccess={isSubmitSuccessful}
            message="Welcome to TOJ!"
          />

          <Auth.Button
            type="submit"
            width="25%"
            border="15px"
            defaultColor={mainColor}
            hoverColor={buttonColor}
          >
            Submit
          </Auth.Button>
        </Auth.Form>
      </SignUp.FormWrapper>

      <Auth.ColorLine color={mainColor} />
    </SignUp.PageContainer>
  );
};

export default NicknameForm;
