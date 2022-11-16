import { FullPage, Slide } from "react-full-page";
import { StartPage, VideoPage, ResultPage, EndPage } from "./ChildrenPage";

export default function FullPageList() {
  return (
    <FullPage>
      <Slide>
        <StartPage />
      </Slide>
      <Slide>
        <VideoPage />
      </Slide>
      <Slide>
        <ResultPage />
      </Slide>
      <Slide>
        <EndPage />
      </Slide>
    </FullPage>
  );
}
