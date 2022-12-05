export const SignUpController = {
  email: () => {
    return `/api/v2/auth/code`;
  },
  code: () => {
    return `/api/v2/auth/code`;
  },
  signUp: () => {
    return `/api/v2/user`;
  },
};

export const SignInController = {
  signIn: () => {
    return `/api/v2/auth`;
  },
};
