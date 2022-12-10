import RequestApi from "../../../../shared/utils/requestApi";
import { ISearch } from "../interface/search";
import { SearchController } from "./requestUrls";

class School {
  /**
   * 학교 검색을 위한 api
   * @param data 소속 (belong), 학교 이름 (name)
   */
  search(data: ISearch) {
    try {
      return RequestApi(
        {
          method: "GET",
          url: SearchController.search(),
          params: { name: data.name, belong: "부산광역시교육청" },
        },
        true,
      );
    } catch (error) {
      return error;
    }
  }
}

export default new School();
