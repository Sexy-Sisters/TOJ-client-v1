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

interface IToken {
  accessToken: string | null;
  refreshToken: string | null;
}

const getToken = (): IToken => {
  const token = {
    accessToken: cookie.load(ACCESS_TOKEN),
    refreshToken: cookie.load(REFRESH_TOKEN),
  };
  return token;
};

const ownToken = (): boolean => {
  return cookie.load(ACCESS_TOKEN) ? true : false;
};

export { setToken, getToken, ownToken };
