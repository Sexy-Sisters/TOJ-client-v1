import { ERROR_EMOJI } from "../../../../shared/constants";
import * as S from "./ErrorText.style";

interface IErrorText {
  isError: boolean;
  message: string | undefined;
  top: string;
  left: string;
}

const ErrorText = ({ isError, message, top, left }: IErrorText) => {
  return (
    <S.Error error={isError} top={top} left={left} className="error-text">
      {message} {ERROR_EMOJI}
    </S.Error>
  );
};

export default ErrorText;
