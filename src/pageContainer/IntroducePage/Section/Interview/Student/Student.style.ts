import {
  MOBILE_SIZE,
  PAD_SIZE,
  MOBILE_ROTATE,
  INTERVIEW_BG_COLOR,
} from "../../../IntroducePage.constant";
import styled from "styled-components";
import {
  InterviewBox,
  InterviewContainer,
  InterviewPage,
  IntervieweePerson,
  IntervieweeNameTag,
  InterveiweePersonInfo,
  IntervieweeProfile,
  InterviewWrapper,
  InterviewContent,
  Interview,
} from "../Interview.style";

export const StudentPage = styled(InterviewPage)`
  background-color: ${INTERVIEW_BG_COLOR};

  @media (max-width: ${MOBILE_SIZE}) {
    transform: rotate(${MOBILE_ROTATE});
    width: 100vh;

    .person {
      width: 220px;
    }
    .content-wrapper {
      align-items: flex-end;
      img {
        margin: 30px;
        width: 500px;
      }
    }
  }
`;

export const Page__container = styled(InterviewContainer)`
  .students-profile {
    animation: students_profileMove ease-out 1s;
  }
  .students-content {
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

export const Students__Interview = styled(Interview)`
  justify-content: flex-start;
`;

export const Interview__box = styled(InterviewBox)``;

export const Interview__wrapper = styled(InterviewWrapper)`
  justify-content: center;
`;

export const Interview__content = styled(InterviewContent)`
  left: 100px;
  @media (max-width: ${PAD_SIZE}) {
    left: 50px;
  }
  @media (max-width: 700px) {
    left: 10vw;
    width: 80vw;
  }
`;

export const Profile = styled(IntervieweeProfile)``;

export const Profile__person = styled(IntervieweePerson)`
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

export const Profile__nameTag = styled(IntervieweeNameTag)`
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

export const NameTag__info = styled(InterveiweePersonInfo)``;
