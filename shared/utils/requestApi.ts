import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../constants/urls";

const RefreshToken = "Refresh-Token";

const RequestApi = (
  config: AxiosRequestConfig,
  isParam?: boolean,
  accessToken?: string,
  refreshToken?: string,
) => {
  try {
    if (accessToken) {
      return axios({
        method: config.method,
        baseURL: BASE_URL,
        url: config.url,
        data: config.data,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }
    if (refreshToken) {
      return axios({
        method: config.method,
        baseURL: BASE_URL,
        url: config.url,
        data: config.data,
        headers: {
          [RefreshToken]: refreshToken,
        },
      });
    }
    if (isParam) {
      return axios({
        method: config.method,
        baseURL: BASE_URL,
        url: config.url,
        params: config.params,
      });
    } else {
      return axios({
        method: config.method,
        baseURL: BASE_URL,
        url: config.url,
        data: config.data,
      });
    }
  } catch (error) {
    return error;
  }
};

export default RequestApi;
