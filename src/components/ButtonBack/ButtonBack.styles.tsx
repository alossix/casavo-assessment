import styled from "styled-components";
import theme from "../../theme";

export const StyledButtonBack = styled.button`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  background-color: ${theme.colors.lightGray};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  position: relative;
  animation: fadeIn 0.5s;

  &:hover {
    background-color: ${theme.colors.lightGrayHover};
  }

  & svg {
    height: 100%;
    transform: rotate(180deg);
    position: absolute;
    top: 0.5rem;

    & g {
      & polygon {
        fill: ${theme.colors.darkGray};
      }
    }
  }
`;
