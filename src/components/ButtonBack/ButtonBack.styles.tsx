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
  flex: 1 1 50%;
  height: 100%;
  position: relative;
  border: none;
  background-color: ${theme.colors.white};
  transition: 0.3s ease;

  & svg {
    height: 100%;
    transform: rotate(180deg);
    position: absolute;
    top: 0.5rem;
    left: 1rem;

    & g {
      & polygon {
        fill: ${theme.colors.darkGray};
      }
    }
  }

  @media screen and (min-width: 1024px) {
    flex: none;
    width: 3.5rem;
    height: 3.5rem;
    background-color: ${theme.colors.lightGray};
    border-radius: 50%;
    border: none;
    cursor: pointer;
    animation: fadeIn 0.5s;

    &:hover {
      background-color: ${theme.colors.lightGrayHover};
    }
  }
`;

export const StyledButtonBackText = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${theme.colors.darkGray};

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
