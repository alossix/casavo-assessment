import styled from "styled-components";
import theme from "../../theme";

export const StyledSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding-top: 1rem;
  animation: navFade 0.5s linear;

  @media screen and (min-width: 768px) {
    padding-top: 0;
  }
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 1024px) {
    align-items: center;
  }
`;
export const StyledSectionDivider = styled.div`
  width: 2rem;
  border-top: 2px solid ${theme.colors.lightGray};
  margin-bottom: 0.6rem;

  @media screen and (min-width: 1024px) {
    margin-top: 1rem;
    margin-bottom: 0.75rem;
  }
`;

export const StyledSectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  margin-bottom: 2rem;

  @media screen and (min-width: 1024px) {
    font-size: 1.125rem;
    letter-spacing: 1.8px;
  }
`;

export const StyledSummaryImgContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;

  & img {
    width: 100%;
    max-width: 700px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 0.35rem;
    margin-bottom: 2rem;
  }
`;

export const StyledModelTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 0.75rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 0.65rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const StyledModelDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6rem;
  color: ${theme.colors.darkGray};

  @media screen and (min-width: 1024px) {
    font-size: 1.125rem;
    line-height: 1.8rem;
    text-align: center;
    margin-bottom: 1.5rem;
    max-width: 75rem;
  }
`;

export const StyledColorButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  @media screen and (min-width: 768px) {
    gap: 0.55rem;
  }

  @media screen and (min-width: 1024px) {
    gap: 0.75rem;
    margin-top: 0.35rem;
    margin-bottom: 1.5rem;
  }
`;

export const StyledColorButton = styled.button<{
  colorCode: string;
}>`
  padding: 2px;
  border: 2px solid ${theme.colors.white};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  background-color: ${({ colorCode }) => colorCode && colorCode};
  box-shadow: 0 0 0 2px ${theme.colors.lightGray};

  @media screen and (min-width: 1024px) {
    width: 3.375rem;
    height: 3.375rem;
  }
`;

export const StyledColorButtonDescription = styled.span`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-transform: capitalize;

  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const StyledAccessoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  color: ${theme.colors.darkGray};

  @media screen and (min-width: 768px) {
    margin-top: 0.25rem;
    line-height: 1.1rem;
  }

  @media screen and (min-width: 1024px) {
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.75rem;
    margin-bottom: 6rem;
    font-size: 1.125rem;
  }
`;
