import React from "react";
import AuthHeader from "./Auth";
import DefaultHeader from "./Default";
import { ownToken } from "shared/utils/tokenManager";
import { IHeader } from "./Header.constant";

const Header = ({ isFixed, isTransparent }: IHeader) => {
  const [isAuth, setIsAuth] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsAuth(ownToken());
  }, []);

  return isAuth ? (
    <AuthHeader isFixed={isFixed} isTransparent={isTransparent} />
  ) : (
    <DefaultHeader isFixed={isFixed} isTransparent={isTransparent} />
  );
};

export default Header;
