import React from "react";
import { TfiArrowCircleUp, TfiArrowCircleDown } from "react-icons/tfi";
import {
  IntroTOJ,
  InterviewPrincipal,
  InterviewStudent,
  EndTOJ,
  CrucialVideo,
  Result,
} from "./Section";
import {
  Section,
  SectionContainer,
  Intorduce_page,
} from "./shared/IntroduceSections.style";

const section_elements: JSX.Element[] = [
  <IntroTOJ />,
  <InterviewPrincipal />,
  <InterviewStudent />,
  <Result />,
  <CrucialVideo />,
  <EndTOJ />,
];

const UP = -1;
const DOWN = 1;

const sections = (): JSX.Element[] => {
  return section_elements.map((section, order) => (
    <Section key={order}>{section}</Section>
  ));
};

const IntroduceSections = () => {
  const [curSection, setCurSection] = React.useState<number>(0);
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  const bodyRef = React.useRef<HTMLCollectionOf<HTMLBodyElement> | null>(null);

  React.useEffect(() => {
    bodyRef.current = document.getElementsByTagName("body");
    bodyRef.current[0].style.overflow = "hidden";

    if (sectionRef.current !== null) {
      sectionRef.current.style.transition = "all 1s ease-in-out";
      sectionRef.current.style.transform = `translateY(-${curSection}00vh)`;
    }
  }, [curSection, bodyRef]);

  const moveSection = (direction: typeof UP | typeof DOWN) => {
    if (
      (curSection === 0 && direction === UP) ||
      (curSection === section_elements.length - 1 && direction === DOWN)
    ) {
      console.log("can't move next section");
    } else {
      setCurSection(curSec => curSec + direction);
    }
  };

  return (
    <Intorduce_page>
      {curSection !== section_elements.length - 1 && (
        <TfiArrowCircleDown
          onClick={() => {
            moveSection(DOWN);
          }}
          className="section-navi down-button"
        />
      )}
      {curSection !== 0 && (
        <TfiArrowCircleUp
          onClick={() => {
            moveSection(UP);
          }}
          className="section-navi up-button"
        />
      )}
      <SectionContainer ref={sectionRef}>{sections()}</SectionContainer>
    </Intorduce_page>
  );
};

export default IntroduceSections;
