import axios from "axios";
import { API_VERSION } from "../constants";
import { BASE_URL } from "../constants/urls";
import { IAPIResponse } from "../interfaces/api";

type ImageType = "AD" | "USER" | "TEACHER" | "WIKI";

interface IImageUpload {
  dir: ImageType;
  images: FormData;
}

export interface IImageUploadResponse extends IAPIResponse {
  data: {
    imgUrlList: string[];
  };
}

const ImageController = {
  upload: () => {
    return `${API_VERSION}image`;
  },
};

/**
 * 이미지 서버 업로드를 위한 api
 * @param data 이미지 (images) FormData
 */
export const imageUpload = (data: IImageUpload) => {
  try {
    return axios({
      method: "POST",
      baseURL: BASE_URL,
      url: ImageController.upload(),
      params: { dir: data.dir },
      data: { images: data.images },
      headers: {
        "Content-Type": "multipart/form-data",
      },
      transformRequest: (data, headers) => {
        return data;
      },
    });
  } catch (error) {
    return error;
  }
};
