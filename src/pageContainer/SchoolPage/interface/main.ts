import { IAPIResponse } from "../../../../shared/interfaces/api";

export interface IGetWiki {
  schoolCode: string;
}

export interface IWiki {
  id: number;
  content: string;
  name: string;
}

export interface IGetWikiResponse extends IAPIResponse {
  data: {
    data: IWiki;
    errorCode: string | null;
    message: string | null;
    result: "SUCCESS" | "FAIL";
  };
}

export interface IUpdateWiki {
  id: number;
  content: string;
}
