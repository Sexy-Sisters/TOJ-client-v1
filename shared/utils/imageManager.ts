import axios from "axios";
import { API_VERSION } from "../constants";
import { BASE_URL } from "../constants/urls";
import { IAPIResponse } from "../interfaces/api";

type ImageType = "AD" | "USER" | "TEACHER" | "WIKI" | "POST" | "SCHOOL";

interface IImageUpload {
  dir: ImageType;
  images: FormData;
}

export interface IImageUploadResponse extends IAPIResponse {
  data:
    | {
        data: {};
        result: "FAIL";
        message: string;
        errorCode: string;
      }
    | { imgUrlList: string[] };
}

const ImageController = {
  upload: () => {
    return `${API_VERSION}image`;
  },
};

/**
 * 이미지 서버 업로드를 위한 api
 * @param data 이미지 타입 (dir), 이미지 (images) FormData
 */
export const imageUpload = (data: IImageUpload) => {
  try {
    return axios.post(BASE_URL + ImageController.upload(), data.images, {
      params: { dir: data.dir },
      headers: { "Content-Type": `multipart/form-data` },
      transformRequest: (data, headers) => {
        return data;
      },
    });
  } catch (error) {
    return error;
  }
};
