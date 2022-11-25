import { SectionsContainer, Section } from "react-fullpage";
import {
  IntroTOJ,
  InterviewPrincipal,
  InterviewStudent,
  EndTOJ,
  CrucialVideo,
  Result,
} from "./Section";

const sectionComponents: JSX.Element[] = [
  <IntroTOJ />,
  <InterviewPrincipal />,
  <InterviewStudent />,
  <Result />,
  <CrucialVideo />,
  <EndTOJ />,
];

const options = {
  anchors: [...new Array(sectionComponents.length)].map((_, i) =>
    (i + 1).toString(),
  ),
};

const sections = (): JSX.Element[] => {
  return sectionComponents.map((section, order) => (
    <Section key={order}>{section}</Section>
  ));
};

const IntroduceSections = () => {
  return <SectionsContainer {...options}>{sections()}</SectionsContainer>;
};

export default IntroduceSections;
