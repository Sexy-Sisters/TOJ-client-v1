import React from "react";
import { EmailForm, PasswordForm } from "./Form";
import { Section, SectionContainer } from "./SignUp.style";

const SignUpSections = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

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
        <EmailForm signUpData={setEmail} nextSection={setCurSection} />
      </Section>
      <Section>
        <PasswordForm signUpData={setPassword} nextSection={setCurSection} />
      </Section>
      <Section></Section>
    </SectionContainer>
  );
};

export default SignUpSections;
