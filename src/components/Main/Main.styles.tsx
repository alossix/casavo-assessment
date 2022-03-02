import styled from "styled-components";

export const StyledMainContainer = styled.section`
  display: flex;
`;

export const StyledDisplayShowcaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 4%;
  }
`;
