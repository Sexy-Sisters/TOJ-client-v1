import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../constants";

const RequestApi = (config: AxiosRequestConfig, token?: string) => {
  try {
    const req = token
      ? axios({
          method: config.method,
          baseURL: BASE_URL,
          url: config.url,
          data: config.data,
          headers: {
            accessToken: token,
          },
        })
      : axios({
          method: config.method,
          baseURL: BASE_URL,
          url: config.url,
          data: config.data,
        });
    return req;
  } catch (error) {
    return error;
  }
};

export default RequestApi;
