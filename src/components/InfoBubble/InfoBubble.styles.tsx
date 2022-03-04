import styled from "styled-components";
import theme from "../../theme";

export const StyledInfoBubble = styled.div`
  @keyframes fade {
    0% {
      opacity: 0.1;
      transform: translate(-50%, -70%);
    }
    25% {
      opacity: 0.25;
      transform: translate(-50%, -65%);
    }
    50% {
      opacity: 0.5;
      transform: translate(-50%, -60%);
    }
    75% {
      opacity: 0.75;
      transform: translate(-50%, -55%);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
  display: flex;
  background-color: rgba(237, 237, 237, 0.8);
  padding: 0.7rem 1.1rem;
  border-radius: 2rem;
  text-transform: capitalize;
  white-space: nowrap;
  position: absolute;
  top: -2.2rem;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  opacity: 1;
  animation: fade 0.1s linear;

  &:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    border-top: 20px solid ${theme.colors.lightGray};
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }
`;
