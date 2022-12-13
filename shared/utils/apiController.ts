import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { IRefreshResponse, refreshApi } from "./refreshManager";
import { BASE_URL } from "../constants/urls";
import { getToken, setToken } from "./tokenManager";

const ACCESS_TOKEN_EXPIRED_ERROR = 401;

export const REFRESH_TOKEN_KEY = "Refresh-Token";
export const AUTHORIZATION_KEY = "Authorization";

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

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

apiController.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async error => {
    const {
      config,
      response: { status },
    } = error;

    if (status === ACCESS_TOKEN_EXPIRED_ERROR) {
      try {
        const { data: res } = (await refreshApi()) as IRefreshResponse;

        if (res.result === "SUCCESS" && res.data.accessToken) {
          setToken(res.data.accessToken);
          if (res.data.refreshToken) {
            setToken(res.data.accessToken, res.data.refreshToken);
          }
        }

        console.log(res);

        return await axios.request(config);
      } catch (err) {
        console.log("토큰 재요청 에러", err);
      }
    }
    return Promise.reject(error);
  },
);

export default apiController;
