import React from "react";
import { EmailForm, NicknameForm, PasswordForm } from "./Form";
import { Section, SectionContainer } from "./SignUp.style";

const SignUpSections = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const bodyRef = React.useRef<HTMLCollectionOf<HTMLBodyElement> | null>(null);

  const [curSection, setCurSection] = React.useState<number>(0);
  const sectionRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    bodyRef.current = document.getElementsByTagName("body");
    bodyRef.current[0].style.overflow = "hidden";

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
      <Section>
        <NicknameForm email={email} password={password} />
      </Section>
    </SectionContainer>
  );
};

export default SignUpSections;
