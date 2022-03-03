import styled from "styled-components";
import theme from "../../theme";

export const StyledTotalPriceOuterContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const StyledSelectedCarImageContainer = styled.div<{
  active: boolean;
}>`
  @keyframes slider {
    0% {
      display: flex;
      width: 0;
      opacity: 0;
    }
    25% {
      width: 2.5rem;
      opacity: 0.3;
    }
    50% {
      width: 5rem;
      opacity: 0.6;
    }
    75% {
      width: 8rem;
      opacity: 0.9;
    }
    100% {
      width: 10.625rem;
      opacity: 1;
    }
  }

  @keyframes sliderReverse {
    0% {
      width: 10.625rem;
      opacity: 1;
    }
    25% {
      width: 8rem;
      opacity: 0.75;
    }
    50% {
      width: 5rem;
      opacity: 0.5;
    }
    75% {
      width: 2.5rem;
      opacity: 0.25;
    }
    100% {
      width: 0;
      opacity: 0;
    }
  }
  height: 5rem;
  border-right: 1px solid ${theme.colors.lightGrayAlt};

  ${({ active }) =>
    !active
      ? `
      animation-name: sliderReverse;
      animation-duration: 0.2s;
      border-right: none;
  `
      : `
      display: flex;
      padding-right: 1.7rem;
      margin-right: 1.7rem;
      animation-name: slider;
      animation-duration: 0.2s;
  `}
`;

export const StyledTotalPriceContainer = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledTotalTitle = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1rem;
  color: ${theme.colors.darkGray};
  margin: 0 0 0.25rem 0;
`;

export const StyledTotalPrice = styled.a`
  font-size: 2rem;
  color: ${theme.colors.black};
  line-height: 2rem;
  margin-bottom: 0.2rem;
`;
