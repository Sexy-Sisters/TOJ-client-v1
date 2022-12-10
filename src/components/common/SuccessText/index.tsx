import { SUCCESS_EMOJI } from "../../../../shared/constants";
import * as S from "./Success.style";

interface ISuccessText {
  isSuccess: boolean;
  message: string;
}

const SuccessText = ({ isSuccess, message }: ISuccessText) => {
  return (
    <S.Success success={isSuccess}>
      {message} {SUCCESS_EMOJI}
    </S.Success>
  );
};

export default SuccessText;
