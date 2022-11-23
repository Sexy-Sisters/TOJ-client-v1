import { Page } from "../../introduceSections.style";
import styled from "styled-components";
import Image from "next/image";

const BG_COLOR = "#1E272E";
const BOX_COLOR = "#DCDDE1";
const NAME_TAG_COLOR = "#303952";

const Z_BOX = 1;
const Z_NAME_TAG = 3;
const Z_PERSON_IMG = 4;

export const InterviewPage = styled(Page)`
  background-color: ${BG_COLOR};
`;

export const InterviewContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const InterviewBox = styled.div`
  display: flex;
  position: absolute;
  z-index: ${Z_BOX};
  top: 100px;
  width: 100%;
  height: 400px;
  background-color: ${BOX_COLOR};
`;

export const Interview = styled.div`
  width: 60%;
  height: 100%;
`;

export const InterviewWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const InterviewContent = styled(Image)`
  position: absolute;
  width: 650px;
  height: auto;
`;

export const IntervieweeProfile = styled.div`
  position: relative;
`;

export const IntervieweePerson = styled(Image)`
  position: absolute;
  z-index: ${Z_PERSON_IMG};
  width: 400px;
  height: auto;
  animation: personIdle 1s infinite;

  @keyframes personIdle {
    0% {
      opacity: 0.8;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.8;
    }
  }
`;

export const IntervieweeNameTag = styled.div`
  position: absolute;
  z-index: ${Z_NAME_TAG};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 80px;
  border-radius: 20px;
  background-color: ${NAME_TAG_COLOR};
`;

export const InterveiweePersonInfo = styled(Image)`
  width: 80%;
  height: auto;
`;
