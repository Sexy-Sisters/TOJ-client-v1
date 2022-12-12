import { API_VERSION } from "../../../../shared/constants";

export const SignUpController = {
  email: () => {
    return `${API_VERSION}auth/code`;
  },
  code: () => {
    return `${API_VERSION}auth/code`;
  },
  signUp: () => {
    return `${API_VERSION}user`;
  },
};

export const SignInController = {
  signIn: () => {
    return `${API_VERSION}auth`;
  },
};
