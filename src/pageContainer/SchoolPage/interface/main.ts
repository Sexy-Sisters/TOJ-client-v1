import { IAPIResponse } from "shared/interfaces/api";

export const ENGAGED = "ENGAGED";
export const WAITING = "WAITING";
export type studentType = typeof ENGAGED | typeof WAITING;

export interface IStudentList {
  status: studentType;
}

export interface IStudentCard {
  classroom: number;
  grade: number;
  nickname: string;
  number: number;
  profileImg: string;
}

export interface IStudentListResponse extends IAPIResponse {
  data: {
    data: IStudentCard[];
    errorCode: string | null;
    message: string | null;
    result: "SUCCESS" | "FAIL";
  };
}
