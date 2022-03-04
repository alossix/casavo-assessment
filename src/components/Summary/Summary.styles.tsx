import styled from "styled-components";
import theme from "../../theme";

export const StyledSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
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
    margin-top: 2rem;
    margin-bottom: 0.75rem;
  }
`;

export const StyledSectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  margin-bottom: 2.25rem;

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
    margin-bottom: 2rem;
  }
`;

export const StyledModelTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 1024px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
`;

export const StyledModelDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: ${theme.colors.darkGray};

  @media screen and (min-width: 1024px) {
    font-size: 1.125rem;
    line-height: 1.8rem;
    text-align: center;
  }
`;

export const StyledColorButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const StyledColorButton = styled.button<{
  colorCode: string;
}>`
  padding: 2px;
  border: 2px solid ${theme.colors.white};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  cursor: pointer;
  background-color: ${({ colorCode }) => colorCode && colorCode};
  box-shadow: 0 0 0 2px ${theme.colors.lightGray};

  @media screen and (min-width: 1024px) {
    width: 3.375rem;
    height: 3.375rem;
  }
`;

export const StyledColorButtonDescription = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-transform: capitalize;
`;
