import styled from "styled-components";

export const Intorduce_page = styled.div`
  .section-navi {
    position: fixed;
    z-index: 1000;
    left: 45%;
    font-size: 40px;
    color: ${props => props.theme.textColor};
    animation: pop 1s infinite;

    &:hover {
      cursor: pointer;
    }

    @keyframes pop {
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  }

  .up-button {
    top: 3vh;
  }
  .down-button {
    top: 90vh;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  overflow: hidden;
  flex: none;
  width: 100vw;
  height: 100vh;
`;

export const Page = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
