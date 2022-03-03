import styled from "styled-components";

export const StyledMainContainer = styled.main`
  display: flex;
  justify-content: center;
  padding: 1rem 5%;

  @media screen and (min-width: 1024px) {
    padding: 0 5%;
  }
`;

export const StyledDisplayShowcaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 75rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 4%;
  }
`;
