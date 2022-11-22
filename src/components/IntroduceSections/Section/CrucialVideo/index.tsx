import {
  Video,
  CurcialVideoPage,
  Video__block,
  Lever__block,
  Lever,
  Lever__blueStick,
  Lever__redStick,
  Lever__yellowStick,
} from "./CrucialVideo.style";
import {
  STICK_COLOR,
  LEVER_COLOR,
  VIDEO_TITLE,
  VIDEO_URL,
} from "./CrucialVideo.constant";
import { useInView } from "react-intersection-observer";

const STICK: JSX.Element[] = [
  <Lever__redStick color={STICK_COLOR.red} />,
  <Lever__blueStick color={STICK_COLOR.blue} />,
  <Lever__yellowStick color={STICK_COLOR.yellow} />,
];

const leverUI = (): JSX.Element[] => {
  return LEVER_COLOR.map((leverColor, i) => (
    <Lever color={leverColor} key={leverColor} className="lever">
      {STICK[i]}
    </Lever>
  ));
};

export default function CrucialVideo() {
  const [curPage, inView] = useInView({ threshold: 0.1 });

  return (
    <CurcialVideoPage ref={curPage}>
      <Video__block className={inView ? "video-block" : ""}>
        <Video src={VIDEO_URL} title={VIDEO_TITLE} />
      </Video__block>

      <Lever__block className={inView ? "lever-block" : ""}>
        {leverUI()}
      </Lever__block>
    </CurcialVideoPage>
  );
}
