import { IAPIResponse } from "../../../../shared/interfaces/page";

export interface ISearch {
  name: string;
}

export interface ISearchResponse extends IAPIResponse {
  data: {
    result: "SUCCESS" | "FAIL";
    data: [
      {
        code: string;
        name: string;
        address: string;
      },
    ];
    message: string | null;
    errorCode: string | null;
  };
}