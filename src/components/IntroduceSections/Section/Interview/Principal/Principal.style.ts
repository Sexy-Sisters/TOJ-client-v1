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

export const PrincipalPage = styled(InterviewPage)`
  background: linear-gradient(
    ${props => props.theme.bgColor},
    ${INTERVIEW_BG_COLOR}
  );

  @media (max-width: ${MOBILE_SIZE}) {
    transform: rotate(${MOBILE_ROTATE});
    width: 100vh;

    .person {
      width: 150px;
    }
    .content {
      align-items: flex-end;
      img {
        margin: 30px;
        width: 500px;
      }
    }
  }
`;

export const Container = styled(InterviewContainer)`
  .principal_profile {
    animation: profileMove ease-out 1s;
  }
  .principal_contentText {
    animation: contentMove ease-out 1.5s;
  }
  .principal_contentBox {
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

export const Box = styled(InterviewBox)`
  justify-content: flex-end;
`;

export const ContentBox = styled(InterviewContentBox)``;

export const ContentWrapper = styled(InterviewContentWrapper)``;

export const Content = styled(InterviewContent)`
  @media (max-width: ${PAD_SIZE}) {
    right: 20px;
  }
  @media (max-width: 700px) {
    right: 0;
    width: 500px;
  }
`;

export const Profile = styled(InterviewProfile)``;

export const Person = styled(InterviewPerson)`
  top: 150px;
  left: 100px;

  @media (max-width: ${PAD_SIZE}) {
    top: 400px;
    left: 0;
    width: 300px;
  }
`;

export const NameTag = styled(InterviewNameTag)`
  top: 470px;
  left: 450px;

  @media (max-width: ${PAD_SIZE}) {
    left: 200px;
    height: 50px;
    width: 300px;
  }
  @media (max-width: ${MOBILE_SIZE}) {
    left: 110px;
    top: 490px;
    height: 40px;
  }
`;

export const PersonInfo = styled(InterveiwPersonInfo)``;
