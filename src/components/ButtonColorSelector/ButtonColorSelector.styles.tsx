import { RefObject } from "react";
import styled from "styled-components";
import theme from "../../theme";

export const StyledColorButtonContainer = styled.div`
  display: flex;
  position: relative;
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
    ${({ highlighted }) =>
      highlighted ? theme.colors.gold : theme.colors.lightGray};

  @media screen and (min-width: 768px) {
    width: 3.2rem;
    height: 3.2rem;
  }
`;
