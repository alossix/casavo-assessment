import styled from "styled-components";
import theme from "../../theme";

export const StyledColorSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledColorSelectorImgContainer = styled.div`
  display: flex;
  margin: 2.5rem 0 4.5rem 0;

  & img {
    width: 100%;
    max-width: 750px;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 1.75rem;
  }
`;

export const StyledColorButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
`;
