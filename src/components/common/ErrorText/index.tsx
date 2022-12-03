import * as S from "./ErrorText.style";

interface IErrorText {
  isError: boolean;
  message: string;
}

const ErrorText = (props: IErrorText) => {
  return <S.Error error={props.isError}>{props.message}</S.Error>;
};

export default ErrorText;
