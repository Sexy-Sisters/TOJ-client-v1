import { API_VERSION } from "shared/constants";
import { BASE_URL } from "shared/constants/urls";
import { IAPIResponse } from "shared/interfaces/api";
import apiController from "./apiController";

export interface IUserProfile {
  nickname: string;
  profileImg: string;
}

export interface IUserProfileResponse extends IAPIResponse {
  data: {
    data: IUserProfile;
    errorCode: string | null;
    message: string | null;
    result: "SUCCESS" | "FAIL";
  };
}

const UserController = {
  get_profile: () => {
    return `${API_VERSION}user`;
  },
};

/**
 * 현재 로그인한 사용자 프로필 조회를 위한 api
 *
 */
export const get_userProfile = () => {
  try {
    return apiController({
      method: "GET",
      baseURL: BASE_URL,
      url: UserController.get_profile(),
    });
  } catch (error) {
    return error;
  }
};
