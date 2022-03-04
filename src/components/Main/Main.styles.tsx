import styled from "styled-components";

export const StyledMainContainer = styled.main`
  display: flex;
  justify-content: center;
  padding: 0 5%;
  overflow-y: scroll;

  @media screen and (min-width: 768px) {
    padding: 0 5% 1rem 5%;
    margin-bottom: 6.25rem;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 2.75rem;
  }

  @media screen and (min-width: 1481px) {
    margin-bottom: 7.5rem;
  }
`;

export const StyledDisplayShowcaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 75rem;
  padding-top: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 4%;
  }
`;
