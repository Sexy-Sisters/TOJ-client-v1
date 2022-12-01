import React from "react";
import EmailForm from "./Form/Email";
import { Section, SectionContainer } from "./SignUp.style";

const SignUpSections = () => {
  const [curSection, setCurSection] = React.useState<number>(0);
  const sectionRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (sectionRef.current !== null) {
      sectionRef.current.style.transition = "all 1s ease-in-out";
      sectionRef.current.style.transform = `translateX(-${curSection}00vw)`;
    }
  }, [curSection]);

  return (
    <SectionContainer ref={sectionRef}>
      <Section>
        <EmailForm nextSection={setCurSection} />
      </Section>
      <Section>
        <EmailForm nextSection={setCurSection} />
      </Section>
    </SectionContainer>
  );
};

export default SignUpSections;
