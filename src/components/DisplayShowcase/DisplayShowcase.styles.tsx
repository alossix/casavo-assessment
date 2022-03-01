import styled from "styled-components";
import theme from "../../theme";

export const StyledDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${theme.colors.lightGray};
  border-radius: 0.25rem;
  padding: 3rem 0 3.25rem 0;
  position: relative;
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
  margin-bottom: 2.5rem;
  color: ${theme.colors.darkGray};
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
      width: 2.75rem;
      height: 2.75rem;
    }
    100% {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  position: absolute;
  bottom: 2.9rem;
  background-color: transparent;
  border: 2px solid ${theme.colors.lightGray};
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 100%;

  ${({ checked }) =>
    checked &&
    `
      animation-name: checkbox;
      animation-duration: 0.3s;
      width: 2.5rem;
      height: 2.5rem;
      background-color: ${theme.colors.gold};
      border: 2px solid ${theme.colors.gold};
  `}
`;
