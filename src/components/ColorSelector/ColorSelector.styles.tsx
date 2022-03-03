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
`;

export const StyledColorButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
`;

export const StyledColorButton = styled.button<{
  colorCode: string;
  highlighted: boolean;
}>`
  padding: 2px;
  border: 2px solid ${theme.colors.white};
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 100%;
  cursor: pointer;
  background-color: ${({ colorCode }) => colorCode && colorCode};
  box-shadow: 0 0 0 2px
    ${({ highlighted }) => (highlighted ? theme.colors.gold : `#ededed`)};
`;
