import styled from "styled-components";

export const StyledHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 1.5rem;
`;

export const StyledMobileInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1rem;
`;

export const StyledDesktopInnerContainer = styled.div`
  display: flex;
  justify-content: center;

  & button {
    position: absolute;
    left: 2rem;
    top: 2rem;
  }
`;

export const StyledMobileH1 = styled.h1`
  font-size: 1.5rem;
  line-height: 1.5rem;

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
`;

export const StyledDesktopH1 = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 2.4rem;
  margin: 2.6rem 0 1.8rem 0;

  @media screen and (min-width: 1481px) {
    font-size: 3rem;
    margin: 3.3rem 0 2.3rem 0;
  }
`;

export const StyledStepText = styled.p`
  line-height: 1rem;

  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.25rem;
  }
`;
