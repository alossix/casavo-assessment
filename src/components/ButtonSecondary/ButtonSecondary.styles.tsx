import styled from "styled-components";
import theme from "../../theme";

export const StyledButtonSecondary = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.375rem;
  color: white;
  background-color: ${theme.colors.gold};
  border: none;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.goldHover};
  }

  & svg {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
`;
