import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { BASE_URL } from "../constants/urls";
import { getToken } from "./tokenManager";

const REFRESH_TOKEN = "Refresh-Token";
const AUTHORIZATION = "Authorization";

const apiController: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

apiController.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config.headers) {
      const token = getToken();
      if (token.accessToken && token.refreshToken) {
        config.headers[AUTHORIZATION] = `Bearer ${token.accessToken}`;
        config.headers[REFRESH_TOKEN] = token.refreshToken;
      }
    }

    console.log(config);

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

apiController.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response);

    return response;
  },
  (error: AxiosError) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default apiController;
