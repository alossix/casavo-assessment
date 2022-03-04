import { RefObject } from "react";
import styled from "styled-components";
import theme from "../../theme";

export const StyledColorButton = styled.button<{
  colorCode: string;
  highlighted: boolean;
  ref: RefObject<HTMLButtonElement>;
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
  position: relative;
`;
