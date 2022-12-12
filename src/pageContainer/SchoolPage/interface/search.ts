import { IAPIResponse } from "../../../../shared/interfaces/page";

export interface ISearch {
  name: string;
}

export interface ISearchData {
  code: string;
  name: string;
  address: string;
  division: string;
}

export interface ISearchResponse extends IAPIResponse {
  data: {
    result: "SUCCESS" | "FAIL";
    data: ISearchData[];
    message: string | null;
    errorCode: string | null;
  };
}
