import { SUCCESS_EMOJI } from "../../../../shared/constants";
import * as S from "./Success.style";

interface ISuccessText {
  isSuccess: boolean;
  message: string;
}

const SuccessText = (props: ISuccessText) => {
  return (
    <S.Success success={props.isSuccess}>
      {props.message} {SUCCESS_EMOJI}
    </S.Success>
  );
};

export default SuccessText;
