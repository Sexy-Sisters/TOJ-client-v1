import { Dispatch, SetStateAction } from "react";
import { IAPIResponse } from "../../../../shared/interfaces/api";

export interface JoinModalProps {
  code: string;
  grade: string;
  modalState: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}

export interface IStudent {
  bio: string;
  image: string;
  name: string;
  nickname: string;
}

export interface IStudentResponse extends IAPIResponse {
  data: {
    data: number;
    errorCode: string | null;
    message: string | null;
    result: "SUCCESS" | "FAIL";
  };
}

export interface IJoin {
  schoolCode: string;
}

export interface IJoinResponse extends IAPIResponse {
  data: {
    data: string;
    errorCode: string | null;
    message: string | null;
    result: "SUCCESS" | "FAIL";
  };
}
