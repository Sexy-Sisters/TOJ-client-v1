import apiController from "../../../../shared/utils/apiController";
import { IStudentCard } from "../interface/join";
import { ISearch } from "../interface/search";
import { SearchController, StudentController } from "./requestUrls";
class School {
  /**
   * 학교 검색을 위한 api
   * @param data 소속 (belong), 학교 이름 (name)
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
  create_studentCard(data: IStudentCard) {
    try {
      return apiController({
        method: "POST",
        url: StudentController.create_studentCard(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }
}

export default new School();
