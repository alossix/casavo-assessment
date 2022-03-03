import styled from "styled-components";
import theme from "../../theme";

export const StyledButtonSecondary = styled.button<{
  disabledColor?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 50%;

  height: 100%;
  color: white;
  border: none;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  background-color: ${({ disabledColor }) =>
    disabledColor ? theme.colors.disabled : theme.colors.gold};
  transition: 0.3s ease;

  &:hover {
    background-color: ${({ disabledColor }) =>
      disabledColor ? theme.colors.disabled : theme.colors.goldHover};
  }

  & svg {
    height: 100%;
    position: absolute;
    bottom: 0.5rem;
    right: 1rem;
  }

  @media screen and (min-width: 1024px) {
    justify-content: flex-start;
    flex: none;
    padding-left: 2rem;
    width: 12.125rem;
    height: 3.5rem;
    border-radius: 2rem;
  }
`;
