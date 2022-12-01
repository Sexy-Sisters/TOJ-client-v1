import React from "react";

export interface ISignUpForm {
  nextSection: React.Dispatch<React.SetStateAction<number>>;
  signUpData: React.Dispatch<React.SetStateAction<string>>;
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
