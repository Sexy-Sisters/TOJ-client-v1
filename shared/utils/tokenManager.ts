import cookie from "react-cookies";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
const HTTP_ONLY = false;

const setToken = (accessToken: string, refreshToken: string) => {
  cookie.save(ACCESS_TOKEN, accessToken, {
    path: "/",
    httpOnly: HTTP_ONLY,
  });
  cookie.save(REFRESH_TOKEN, refreshToken, {
    path: "/",
    httpOnly: HTTP_ONLY,
  });
};

const getToken = (): string | null => {
  return cookie.load(ACCESS_TOKEN) ? cookie.load(ACCESS_TOKEN) : null;
};

export { setToken, getToken };
