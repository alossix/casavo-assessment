import styled from "styled-components";
import theme from "../../theme";

export const StyledDisplayContainer = styled.div<{ checked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.25rem;
  padding: 3rem 0 2.25rem 0;
  position: relative;
  cursor: pointer;
  border: 2px solid
    ${({ checked }) => (checked ? theme.colors.gold : theme.colors.lightGray)};
  transition: 0.5s ease;
`;

export const StyledDisplayContainerTitle = styled.span`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  height: 1.75rem;
  margin-top: 0.25rem;
  margin-bottom: 0.15rem;
`;

export const StyledImg = styled.img`
  display: block;
  max-width: 80%;
  margin: 1.8rem auto 2.2rem auto;
`;

export const StyledPriceSpan = styled.span`
  margin-bottom: 0.35rem;
  color: ${theme.colors.darkGray};
`;

export const StyledCheckButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 100%;
`;

export const StyledCheckButton = styled.button<{ checked: boolean }>`
  @keyframes checkbox {
    0% {
      width: 1.75rem;
      height: 1.75rem;
    }
    25% {
      width: 2.5rem;
      height: 2.5rem;
    }
    50% {
      width: 3rem;
      height: 3rem;
    }
    75% {
      width: 2.7rem;
      height: 2.7rem;
    }
  }

  @keyframes checkboxUnchecked {
    0% {
      width: 2.75rem;
      height: 2.75rem;
    }
    25% {
      width: 2.35rem;
      height: 2.35rem;
    }
    50% {
      width: 2.2rem;
      height: 2.2rem;
    }
    75% {
      width: 2.05rem;
      height: 2.05rem;
    }
  }
  background-color: transparent;
  border: 2px solid ${theme.colors.lightGray};
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 100%;
  animation-name: checkboxUnchecked;
  animation-duration: 0.25s;
  cursor: pointer;

  ${({ checked }) =>
    checked &&
    `
      animation-name: checkbox;
      animation-duration: 0.35s;
      width: 2.75rem;
      height: 2.75rem;
      background-color: ${theme.colors.gold};
      border: 2px solid ${theme.colors.gold};
  `};
`;
