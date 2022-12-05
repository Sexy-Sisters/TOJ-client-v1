import { IAPIResponse } from "../../../../shared/interfaces/page";

export interface ISignInForm {
  email: string;
  password: string;
}

export interface ISignInAPI {
  email: string;
  password: string;
}

export interface ISignInResponse extends IAPIResponse {
  data: {
    data: {
      accessToken: string;
      refreshToken: string;
    };
    errorCode: "email" | "password" | null;
    message: string | null;
    result: "SUCCESS" | "FAIL";
  };
}
