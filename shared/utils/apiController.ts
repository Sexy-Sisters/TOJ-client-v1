import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { BASE_URL } from "../constants/urls";
import { getToken } from "./tokenManager";

const REFRESH_TOKEN_KEY = "Refresh-Token";
const AUTHORIZATION_KEY = "Authorization";

const apiController: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

apiController.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config.headers) {
      const token = getToken();
      if (token.accessToken && token.refreshToken) {
        config.headers[AUTHORIZATION_KEY] = `Bearer ${token.accessToken}`;
        config.headers[REFRESH_TOKEN_KEY] = token.refreshToken;
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
