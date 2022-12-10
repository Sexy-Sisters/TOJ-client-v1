import { ERROR_EMOJI } from "../../../../shared/constants";
import * as S from "./ErrorText.style";

interface IErrorText {
  isError: boolean;
  message: string | undefined;
}

const ErrorText = ({ isError, message }: IErrorText) => {
  return (
    <S.Error error={isError} className="error-text">
      {message} {ERROR_EMOJI}
    </S.Error>
  );
};

export default ErrorText;
