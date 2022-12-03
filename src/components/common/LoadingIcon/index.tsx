import * as S from "./Loading.style";

interface ILoadingIcon {
  isLoading: boolean;
  posY: string;
  posX: string;
}

const LoadingIcon = (props: ILoadingIcon) => {
  return (
    <S.Loading loading={props.isLoading} posY={props.posY} posX={props.posX}>
      ♻️
    </S.Loading>
  );
};

export default LoadingIcon;
