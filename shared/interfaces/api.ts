import { AxiosHeaders } from "axios";

export interface IAPIResponse {
  config: object;
  data: object;
  headers: AxiosHeaders;
  request: XMLHttpRequest;
  status: number;
  statusText: string;
}
