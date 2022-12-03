import * as S from "./Success.style";

interface ISuccessText {
  isSuccess: boolean;
  message: string;
}

const SuccessText = (props: ISuccessText) => {
  return <S.Success success={props.isSuccess}>{props.message}</S.Success>;
};

export default SuccessText;
