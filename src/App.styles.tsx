import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  height: 100vh;
`;

export const StyledInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.75rem;
  padding-bottom: 3rem;

  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`;
