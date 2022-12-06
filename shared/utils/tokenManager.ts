import cookie from "react-cookies";
const HTTP_ONLY = false;

const setToken = (accessToken: string, refreshToken: string) => {
  cookie.save("accessToken", accessToken, {
    path: "/",
    httpOnly: HTTP_ONLY,
  });
  cookie.save("refreshToken", refreshToken, {
    path: "/",
    httpOnly: HTTP_ONLY,
  });
};

export { setToken };
