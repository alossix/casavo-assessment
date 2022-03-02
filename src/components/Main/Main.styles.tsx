import styled from "styled-components";

export const StyledMainContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
