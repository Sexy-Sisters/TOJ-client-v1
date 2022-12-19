import apiController from "../../../../shared/utils/apiController";
import { IJoin, IStudent } from "../interface/join";
import { IGetWiki, IUpdateWiki } from "../interface/main";
import { ISearch } from "../interface/search";
import {
  SearchController,
  StudentController,
  WikiController,
} from "./requestUrls";

class School {
  /**
   * 학교 검색을 위한 api
   * @param data 학교 이름 (name)
   */
  search(data: ISearch) {
    try {
      return apiController({
        method: "GET",
        url: SearchController.search(),
        params: data,
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * 학생 생성 위한 api
   * @param data 나이 (age), 학년 (grade), 반 (classroom), 번호 (number)
   */
  create_student(data: IStudent) {
    try {
      return apiController({
        method: "POST",
        url: StudentController.create_student(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * 학교 참여를 위한 api
   * @param data 학교코드 (schoolCode)
   */
  join_student(data: IJoin) {
    try {
      return apiController({
        method: "POST",
        url: StudentController.join_student(),
        params: data,
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * 학교 위키 단건 조회를 위한 api
   * @param data 학교코드 (schoolCode)
   */
  get_wiki(data: IGetWiki) {
    try {
      return apiController({
        method: "GET",
        url: WikiController.get_wiki(),
        params: data,
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * 학교 위키 수정 후 저장을 위한 api
   * @param data 위키 본문 (wiki content), 아이디 (id)
   */
  update_wiki(data: IUpdateWiki) {
    try {
      return apiController({
        method: "PUT",
        url: WikiController.update_wiki(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }
}

export default new School();
