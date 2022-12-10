import React from "react";
import HaveAuthHeader from "./HaveAuth";
import NoAuthHeader from "./NoAuth";
import { ownToken } from "../../../../shared/utils/tokenManager";
import { IHeader } from "./Header.constant";

const Header = ({ isFixed, isTransparent }: IHeader) => {
  const [isAuth, setIsAuth] = React.useState<boolean>(false);
  React.useEffect(() => {
    setIsAuth(ownToken());
  }, []);

  return isAuth ? (
    <HaveAuthHeader isFixed={isFixed} isTransparent={isTransparent} />
  ) : (
    <NoAuthHeader isFixed={isFixed} isTransparent={isTransparent} />
  );
};

export default Header;
