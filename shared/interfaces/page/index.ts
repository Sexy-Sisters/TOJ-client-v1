import type { NextPage } from "next";
import { AxiosHeaders } from "axios";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export interface IAPIResponse {
  config: object;
  data: object;
  headers: AxiosHeaders;
  request: XMLHttpRequest;
  status: number;
  statusText: string;
}
