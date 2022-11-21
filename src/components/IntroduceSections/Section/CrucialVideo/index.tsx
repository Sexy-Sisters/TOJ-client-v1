import {
  LeverWrapper,
  LeverUI,
  Container,
  VideoWrapper,
  Video,
  RedStick,
  BlueStick,
  YellowStick,
  CurcialVideoPage,
} from "./CrucialVideo.style";
import { useInView } from "react-intersection-observer";

export const video_url =
  "https://www.youtube.com/embed/kR3yyaSXtK4?controls=0&amp;start=136&?autoplay=1";
export const video_title = "교장 인터뷰 증거 영상";

export const lever_colors = ["#EB2F06", "#0984E3", "#FDCB6E"];
export const stick_colors = {
  red: "#C02200",
  blue: "#0068B8",
  yellow: "#FFB326",
};

const sticks: JSX.Element[] = [
  <RedStick color={stick_colors.red} />,
  <BlueStick color={stick_colors.blue} />,
  <YellowStick color={stick_colors.yellow} />,
];

const leverUI = (): JSX.Element[] => {
  return lever_colors.map((leverColor, i) => (
    <LeverUI color={leverColor} key={leverColor} className="lever_ui">
      {sticks[i]}
    </LeverUI>
  ));
};

export default function CrucialVideo() {
  const [curPage, inView] = useInView({ threshold: 0.1 });

  return (
    <CurcialVideoPage ref={curPage}>
      <Container>
        <VideoWrapper className={inView ? "video_wrapper" : ""}>
          <Video src={video_url} title={video_title} />
        </VideoWrapper>

        <LeverWrapper className={inView ? "lever_wrapper" : ""}>
          {leverUI()}
        </LeverWrapper>
      </Container>
    </CurcialVideoPage>
  );
}
