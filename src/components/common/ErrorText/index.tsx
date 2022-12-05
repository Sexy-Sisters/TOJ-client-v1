import { ERROR_EMOJI } from "../../../../shared/constants";
import * as S from "./ErrorText.style";

interface IErrorText {
  isError: boolean;
  message: string | undefined;
}

const ErrorText = (props: IErrorText) => {
  return (
    <S.Error error={props.isError}>
      {props.message} {ERROR_EMOJI}
    </S.Error>
  );
};

export default ErrorText;
