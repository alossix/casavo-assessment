import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0 5%; */
  height: 100vh;
  width: 100%;
`;

export const StyledInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.75rem 5% 3rem 5%;

  @media screen and (min-width: 1024px) {
    padding-top: 0;
    max-width: 75rem;
  }
`;
