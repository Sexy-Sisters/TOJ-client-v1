export type SchoolInitialType =
  | "초등학교"
  | "중학교"
  | "고등학교"
  | "방송통신고등학교"
  | "공동실습소";

export const SCHOOL_INITIAL = {
  초등학교: { age: { start: 8, end: 13 }, grade: 6 },
  중학교: { age: { start: 14, end: 16 }, grade: 3 },
  고등학교: { age: { start: 17, end: 19 }, grade: 3 },
  방송통신고등학교: { age: { start: 17, end: 19 }, grade: 3 },
  공동실습소: { age: { start: 17, end: 19 }, grade: 3 },
};

export interface IError {
  isError: boolean;
  message: string;
}

export const defaultError: IError = {
  isError: false,
  message: "",
};
