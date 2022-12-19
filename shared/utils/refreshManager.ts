import axios from "axios";
import { API_VERSION } from "../constants";
import { BASE_URL } from "../constants/urls";
import { IAPIResponse } from "../interfaces/api";
import { REFRESH_TOKEN_KEY } from "./apiController";
import { getToken } from "./tokenManager";

export interface IRefreshResponse extends IAPIResponse {
  data: {
    data: {
      accessToken: string;
      refreshToken: null | string;
    };
    errorCode: string | null;
    message: string | null;
    result: "SUCCESS" | "FAIL";
  };
}

const RefreshController = {
  refresh: () => {
    return `${API_VERSION}auth`;
  },
};

/**
 * Authorization 토큰 재요청을 위한 api
 *
 */
export const refreshApi = () => {
  try {
    return axios({
      method: "PUT",
      baseURL: BASE_URL,
      url: RefreshController.refresh(),
      headers: {
        [REFRESH_TOKEN_KEY]: getToken().refreshToken,
      },
    });
  } catch (error) {
    return error;
  }
};
