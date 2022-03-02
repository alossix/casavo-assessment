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
  position: relative;

  &:hover {
    background-color: ${theme.colors.goldHover};
  }

  & svg {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }

  @media screen and (min-width: 1024px) {
    justify-content: flex-start;
    padding-left: 2rem;
    width: 12.125rem;
    height: 3.5rem;
    border-radius: 2rem;

    & svg {
      bottom: 1.15rem;
    }
  }
`;
