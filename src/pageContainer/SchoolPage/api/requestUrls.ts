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

  list_student: () => {
    return `${API_VERSION}student`;
  },

  approve_student: () => {
    return `${API_VERSION}approve`;
  },
};

export const WikiController = {
  get_wiki: () => {
    return `${API_VERSION}wiki`;
  },

  update_wiki: () => {
    return `${API_VERSION}wiki`;
  },
};
