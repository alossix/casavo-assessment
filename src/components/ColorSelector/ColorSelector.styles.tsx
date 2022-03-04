import styled from "styled-components";

export const StyledColorSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

export const StyledColorSelectorImgContainer = styled.div`
  display: flex;
  margin: 2.5rem 0 4.5rem 0;

  & img {
    width: 100%;
    max-width: 750px;
  }

  @media screen and (min-width: 1024px) {
    margin: 1rem 0 2rem 0;
  }

  @media screen and (min-width: 1481px) {
    margin: 1rem 0 4rem 0;
  }
`;

export const StyledColorButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 1.15rem;
  }
`;
