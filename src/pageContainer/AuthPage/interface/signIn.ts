import { IAPIResponse } from "../../../../shared/interfaces/page";

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignInResponse extends IAPIResponse {
  data: {
    data: {
      accessToken: string;
      refreshToken: string;
    };
    errorCode: string | null;
    message: string | null;
    result: "SUCCESS" | "FAIL";
  };
}
