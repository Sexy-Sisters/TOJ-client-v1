import {
  MOBILE_SIZE,
  PAD_SIZE,
  MOBILE_ROTATE,
  INTERVIEW_BG_COLOR,
} from "../../../IntroducePage.constant";
import styled from "styled-components";
import {
  Interview,
  InterviewBox,
  InterviewContainer,
  InterviewPage,
  InterviewContent,
  IntervieweePerson,
  IntervieweeNameTag,
  InterveiweePersonInfo,
  IntervieweeProfile,
  InterviewWrapper,
} from "../Interview.style";

export const PrincipalPage = styled(InterviewPage)`
  background: linear-gradient(
    ${props => props.theme.bgColor},
    ${INTERVIEW_BG_COLOR}
  );

  @media (max-width: ${MOBILE_SIZE}) {
    width: 100vh;
    transform: rotate(${MOBILE_ROTATE});

    .interviewee-person {
      width: 150px;
    }
    .interview-content {
      align-items: flex-end;
      .interview-content-text {
        width: 500px;
        margin: 30px;
      }
    }
  }
`;

export const Page__container = styled(InterviewContainer)`
  .interviewee-profile {
    animation: profileMove ease-out 1s;
  }
  .interview-content-text {
    animation: contentMove ease-out 1.5s;
  }
  .interview {
    animation: contentFadeIn linear 1.5s;
  }

  @keyframes profileMove {
    from {
      z-index: 100;
      transform: translateX(-100%);
    }
    to {
      z-index: 100;
      transform: translateX(0);
    }
  }
  @keyframes contentMove {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes contentFadeIn {
    0% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: ${MOBILE_SIZE}) {
    top: -300px;
  }
`;

export const Principal__interview = styled(Interview)`
  justify-content: flex-end;
`;

export const Interview__box = styled(InterviewBox)``;

export const Interview__wrapper = styled(InterviewWrapper)``;

export const Interview__content = styled(InterviewContent)`
  right: 100px;

  @media (max-width: ${PAD_SIZE}) {
    right: 5vw;
  }
  @media (max-width: 700px) {
    right: 0;
    width: 500px;
  }
`;

export const Profile = styled(IntervieweeProfile)``;

export const Profile__person = styled(IntervieweePerson)`
  top: 150px;
  left: 50px;

  @media (max-width: ${PAD_SIZE}) {
    top: 400px;
    left: 0;
    width: 300px;
  }
`;

export const Profile__nameTag = styled(IntervieweeNameTag)`
  top: 470px;
  left: 400px;

  @media (max-width: ${PAD_SIZE}) {
    left: 200px;
    width: 300px;
    height: 50px;
  }
  @media (max-width: ${MOBILE_SIZE}) {
    left: 110px;
    top: 490px;
    height: 40px;
  }
`;

export const NameTag__info = styled(InterveiweePersonInfo)``;
