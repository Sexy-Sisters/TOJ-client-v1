import { API_VERSION } from "../../../../shared/constants";

export const SearchController = {
  search: () => {
    return `${API_VERSION}school`;
  },
};

export const StudentController = {
  create_student: () => {
    return `${API_VERSION}student`;
  },

  join_student: () => {
    return `${API_VERSION}school`;
  },
};
