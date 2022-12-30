import React from "react";
import { useRouter } from "next/router";
import { SIGN_IN_URL } from "shared/constants/urls";
import { useToast } from "shared/hooks";
import { ownToken } from "shared/utils/tokenManager";
import SideManager from "./SideManager";
import { NO_AUTH_MSG } from "shared/constants/message";

const MainPage = () => {
  const { push } = useRouter();
  const { onToast } = useToast();

  React.useEffect(() => {
    if (!ownToken()) {
      push(SIGN_IN_URL);
      onToast("error", NO_AUTH_MSG);
    }
  }, []);

  return (
    <>
      <SideManager />
    </>
  );
};

export default MainPage;
