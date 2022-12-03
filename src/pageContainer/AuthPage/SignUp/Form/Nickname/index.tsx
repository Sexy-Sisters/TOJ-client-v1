import { useRouter } from "next/router";
import auth from "pageContainer/AuthPage/api/auth";
import { INicknameForm } from "pageContainer/AuthPage/interface/signUp";
import { useForm } from "react-hook-form";
import * as G from "../../SignUp.style";

const mainColor = "#0984E3";
const buttonColor = "#4B9CDB";

const NicknameForm = (props: { email: string; password: string }) => {
  const { register, handleSubmit } = useForm<INicknameForm>();
  const { push } = useRouter();

  const onValid = async (data: INicknameForm) => {
    const authUser = {
      email: props.email,
      nickname: data.nickname,
      password: props.password,
    };
    await auth.signUp(authUser);
    push("/");
  };

  const onInValid = () => {
    // 예외 처리
  };

  return (
    <G.PageContainer>
      <G.FormWrapper height="200px">
        <G.KindName>{`마지막으로\n닉네임 👶`}</G.KindName>

        <G.Form onSubmit={handleSubmit(onValid, onInValid)}>
          <G.Input
            placeholder="닉네임..."
            width="70%"
            border="15px"
            {...register("nickname", {
              required: "닉네임을 입력해 주세요",
              minLength: 2,
              maxLength: 8,
            })}
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
