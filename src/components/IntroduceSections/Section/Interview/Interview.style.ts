import { Page } from "components/IntroduceSections/IntroduceSections.style";
import styled from "styled-components";

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
  height: 100%;
  width: 100%;
`;

export const InterviewBox = styled.div`
  display: flex;
  position: absolute;
  z-index: ${Z_BOX};
  top: 100px;
  height: 400px;
  width: 100%;
  background-color: ${BOX_COLOR};
`;

export const InterviewContentBox = styled.div`
  height: 100%;
  width: 60%;
`;

export const InterviewContentWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const InterviewContent = styled.img`
  position: absolute;
  height: auto;
  width: 650px;
`;

export const InterviewProfile = styled.div`
  position: relative;
`;

export const InterviewPerson = styled.img`
  position: absolute;
  z-index: ${Z_PERSON_IMG};
  height: auto;
  width: 400px;
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

export const InterviewNameTag = styled.div`
  position: absolute;
  z-index: ${Z_NAME_TAG};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 500px;
  border-radius: 20px;
  background-color: ${NAME_TAG_COLOR};
`;

export const InterveiwPersonInfo = styled.img`
  width: 80%;
  height: auto;
`;
