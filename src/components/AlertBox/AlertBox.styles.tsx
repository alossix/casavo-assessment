import styled from "styled-components";
import theme from "../../theme";

export const StyledAlertBoxContainer = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    width: 100%;
    height: 7.5rem;
    position: fixed;
    bottom: 0;
    z-index: 3;
  }
`;

export const StyledAlertBox = styled.div`
  @keyframes sliderAlert {
    0% {
      transform: translateY(100px);
    }
    25% {
      transform: translateY(75px);
    }
    50% {
      transform: translateY(50px);
    }
    75% {
      transform: translateY(25px);
    }
    100% {
      transform: translateY(0);
    }
  }
  background-color: ${theme.colors.black};
  color: white;
  padding: 0.8rem 1rem;
  width: 11.75rem;
  height: fit-content;
  white-space: nowrap;
  border-radius: 0.25rem;
  animation-name: sliderAlert;
  animation-duration: 0.2s;
`;
