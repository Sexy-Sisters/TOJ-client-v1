import { ErrorText } from "components/common";
import { useRouter } from "next/router";
import auth from "pageContainer/AuthPage/api/auth";
import { validSpace } from "pageContainer/AuthPage/util/validSpace";
import { useForm } from "react-hook-form";
import * as I from "pageContainer/AuthPage/interface/signUp";
import * as G from "../../SignUp.style";

const mainColor = "#0984E3";
const buttonColor = "#4B9CDB";

const NicknameForm = (props: { email: string; password: string }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<I.INicknameForm>();
  const { push } = useRouter();

  const onValid = async (data: I.INicknameForm) => {
    // 닉네임 공백 검증
    const validResult = validSpace(data.nickname.length, data.nickname, () => {
      setError(
        "nickname",
        { message: "닉네임에 공백을 포함할 수 없어요" },
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
    <G.PageContainer>
      <G.FormWrapper height="200px">
        <G.KindName>{`Last,\nNickname 🦋`}</G.KindName>

        <G.Form onSubmit={handleSubmit(onValid)}>
          <G.Input
            placeholder="닉네임..."
            width="70%"
            border="15px"
            {...register("nickname", {
              required: "닉네임을 입력해 주세요",
              minLength: {
                value: 2,
                message: "닉네임은 2자 이상으로 입력해 주세요",
              },
              maxLength: {
                value: 8,
                message: "닉네임은 8자 이하로 입력해 주세요",
              },
            })}
          />

          {/* 닉네임 폼 상태 텍스트 */}
          <ErrorText
            isError={errors.nickname ? true : false}
            message={errors.nickname?.message}
          />

          <G.Button
            type="submit"
            width="25%"
            border="15px"
            defaultColor={buttonColor}
            hoverColor={mainColor}
          >
            완료!
          </G.Button>
        </G.Form>
      </G.FormWrapper>

      <G.ColorLine color={mainColor} />
    </G.PageContainer>
  );
};

export default NicknameForm;
