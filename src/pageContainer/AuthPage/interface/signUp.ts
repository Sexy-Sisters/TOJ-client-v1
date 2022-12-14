import React from "react";
import { IAPIResponse } from "../../../../shared/interfaces/api";

export interface ISignUpResponse extends IAPIResponse {
  data: {
    data: { userId: number };
    errorCode: string | null;
    message: string | null;
    result: "SUCCESS" | "FAIL";
  };
}

export interface IEmailResponse extends IAPIResponse {
  data: {
    data: object;
    errorCode: string | null;
    message: string | null;
    result: "SUCCESS" | "FAIL";
  };
}

export interface ICodeResponse extends IAPIResponse {
  data: {
    data: boolean;
    errorCode: string | null;
    message: string | null;
    result: "SUCCESS" | "FAIL";
  };
}

export interface ISignUpPage {
  nextSection: React.Dispatch<React.SetStateAction<number>>;
  signUpData: React.Dispatch<React.SetStateAction<string>>;
}

export interface ISignUp {
  email: string;
  nickname: string;
  password: string;
}

export interface IEmail {
  email: string;
}

export interface ICodeForm {
  code: string;
}

export interface ICodeAPI {
  email: string;
  code: string;
}

export interface IPwd {
  password: string;
}

export interface IRePwd {
  rePassword: string;
}

export interface INickname {
  nickname: string;
}
