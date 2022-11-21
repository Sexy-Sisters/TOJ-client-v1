import {
  MOBILE_SIZE,
  PAD_SIZE,
  MOBILE_ROTATE,
  INTERVIEW_BG_COLOR,
} from "components/IntroduceSections/IntroduceSections.style";
import styled from "styled-components";
import {
  InterviewBox,
  InterviewContainer,
  InterviewContentBox,
  InterviewPage,
  InterviewContent,
  InterviewPerson,
  InterviewContentWrapper,
  InterviewNameTag,
  InterveiwPersonInfo,
  InterviewProfile,
} from "../Interview.style";

export const StudentPage = styled(InterviewPage)`
  background-color: ${INTERVIEW_BG_COLOR};

  @media (max-width: ${MOBILE_SIZE}) {
    transform: rotate(${MOBILE_ROTATE});
    width: 100vh;

    .person {
      width: 220px;
    }
    .content_wrapper {
      align-items: flex-end;
      img {
        margin: 30px;
        width: 500px;
      }
    }
  }
`;

export const Container = styled(InterviewContainer)`
  .students_profile {
    animation: students_profileMove ease-out 1s;
  }
  .students_content {
    animation: students_contentMove ease-out 1.5s;
  }
  @keyframes students_profileMove {
    from {
      z-index: 100;
      transform: translateX(100%);
    }
    to {
      z-index: 100;
      transform: translateX(0);
    }
  }
  @keyframes students_contentMove {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: ${MOBILE_SIZE}) {
    top: -300px;
  }
`;

export const Box = styled(InterviewBox)`
  justify-content: flex-start;
`;

export const ContentBox = styled(InterviewContentBox)``;

export const ContentWrapper = styled(InterviewContentWrapper)`
  justify-content: center;
`;

export const Content = styled(InterviewContent)`
  left: 100px;
  @media (max-width: ${PAD_SIZE}) {
    left: 50px;
  }
  @media (max-width: 700px) {
    left: 10vw;
    width: 80vw;
  }
`;

export const Profile = styled(InterviewProfile)``;

export const Person = styled(InterviewPerson)`
  top: 250px;
  right: -100px;
  width: 500px;

  @media (max-width: ${PAD_SIZE}) {
    top: 350px;
    width: 450px;
  }
  @media (max-width: 700px) {
    width: 350px;
  }
  @media (max-width: ${MOBILE_SIZE}) {
    right: -50px;
  }
`;

export const NameTag = styled(InterviewNameTag)`
  z-index: 5;
  top: 550px;
  right: 350px;

  @media (max-width: ${PAD_SIZE}) {
    top: 625px;
    right: 275px;
    width: 400px;
    height: 70px;
  }
  @media (max-width: 700px) {
    top: 570px;
    right: 200px;
    width: 280px;
    height: 50px;
  }
  @media (max-width: ${MOBILE_SIZE}) {
    right: 150px;
    top: 490px;
    height: 40px;
  }
`;

export const PersonInfo = styled(InterveiwPersonInfo)``;
