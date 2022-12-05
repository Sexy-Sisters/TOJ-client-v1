import React from "react";
import { IAPIResponse } from "../../../../shared/interfaces/page";

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

export interface ISignUpForm {
  nextSection: React.Dispatch<React.SetStateAction<number>>;
  signUpData: React.Dispatch<React.SetStateAction<string>>;
}

export interface ISignUpAPI {
  email: string;
  nickname: string;
  password: string;
}

export interface IEmailForm {
  email: string;
}

export interface IEmailAPI {
  email: string;
}

export interface ICodeForm {
  code: string;
}

export interface ICodeAPI {
  email: string;
  code: string;
}

export interface IPwdForm {
  password: string;
}

export interface IRePwdForm {
  rePassword: string;
}

export interface INicknameForm {
  nickname: string;
}
