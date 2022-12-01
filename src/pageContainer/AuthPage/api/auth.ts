import RequestApi from "../../../../shared/utils/requestApi";
import { IEmail, ICode } from "../interface/signUp";
import { SignUpController } from "./requestUrls";

class Auth {
  /**
   * signUp 이메일 유효성 확인을 위한 api
   * @param data 이메일
   */
  signUp_email(data: IEmail) {
    try {
      return RequestApi({
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
  signUp_code(data: ICode) {
    try {
      return RequestApi({
        method: "DELETE",
        url: SignUpController.code(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();
