import { LOADING_EMOJI } from "../../../../shared/constants";
import * as S from "./Loading.style";

interface ILoadingIcon {
  isLoading: boolean;
  posY: string;
  posX: string;
}

const LoadingIcon = (props: ILoadingIcon) => {
  return (
    <S.Loading loading={props.isLoading} posY={props.posY} posX={props.posX}>
      {LOADING_EMOJI}
    </S.Loading>
  );
};

export default LoadingIcon;
