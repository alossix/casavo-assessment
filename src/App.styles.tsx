import styled from "styled-components";

export const StyledOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
`;

export const StyledInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 1024px) {
    padding-top: 0;
    max-width: 75rem;
  }
`;
