import { API_VERSION } from "../../../../shared/constants";

export const SearchController = {
  search: () => {
    return `${API_VERSION}school`;
  },
};

export const StudentController = {
  create_studentCard: () => {
    return `${API_VERSION}student`;
  },
};
