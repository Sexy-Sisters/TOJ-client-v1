import * as S from "./CrucialVideo.style";
import {
  STICK_COLOR,
  LEVER_COLOR,
  VIDEO_TITLE,
  VIDEO_URL,
} from "./CrucialVideo.constant";
import { useInView } from "react-intersection-observer";

const STICK: JSX.Element[] = [
  <S.Lever__redStick color={STICK_COLOR.red} />,
  <S.Lever__blueStick color={STICK_COLOR.blue} />,
  <S.Lever__yellowStick color={STICK_COLOR.yellow} />,
];

const leverUI = (): JSX.Element[] => {
  return LEVER_COLOR.map((leverColor, i) => (
    <S.Lever color={leverColor} key={leverColor} className="lever">
      {STICK[i]}
    </S.Lever>
  ));
};

const CrucialVideo = () => {
  const [curPage, inView] = useInView({ threshold: 0.1 });

  return (
    <S.CurcialVideoPage ref={curPage}>
      <S.Video__block className={inView ? "video-block" : ""}>
        <S.Video src={VIDEO_URL} title={VIDEO_TITLE} />
      </S.Video__block>

      <S.Lever__block className={inView ? "lever-block" : ""}>
        {leverUI()}
      </S.Lever__block>
    </S.CurcialVideoPage>
  );
};

export default CrucialVideo;
