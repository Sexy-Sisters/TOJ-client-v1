import apiController from "../../../../shared/utils/apiController";
import { ICodeAPI, IEmail, ISignUp } from "../interface/signUp";
import { ISignIn } from "../interface/signIn";
import { SignInController, SignUpController } from "./requestUrls";

class Auth {
  /**
   * signUp 이메일 유효성 확인을 위한 api
   * @param data 이메일
   */
  signUp_email(data: IEmail) {
    try {
      return apiController({
        method: "POST",
        url: SignUpController.email(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * signUp 이메일 인증 코드 확인을 `위한 api
   * @param data 이메일, 인증 코드
   */
  signUp_code(data: ICodeAPI) {
    try {
      return apiController({
        method: "DELETE",
        url: SignUpController.code(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * signUp api
   * @param data 이메일, 비밀번호, 닉네임
   */
  signUp(data: ISignUp) {
    try {
      return apiController({
        method: "POST",
        url: SignUpController.signUp(),
        data: data,
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  /**
   * signIn api
   * @param data 이메일 (email), 비밀번호 (password)
   */
  signIn(data: ISignIn) {
    try {
      return apiController({
        method: "POST",
        url: SignInController.signIn(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();
