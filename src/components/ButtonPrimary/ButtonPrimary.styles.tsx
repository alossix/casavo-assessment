import styled from "styled-components";
import theme from "../../theme";
import Arrow from "../../icons/Arrow";

export const StyledButtonPrimary = styled.button`
  display: flex;
  position: relative;
  padding: 0.8rem;
  border: none;
  border-radius: 0.25rem;
  width: 100%;
  background-color: ${theme.colors.darkGray};
  color: ${theme.colors.white};
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.darkGrayHover};
  }

  & svg {
    position: absolute;
    top: 0.8rem;
    transform: rotate(180deg);

    & path {
      fill: ${theme.colors.white};
    }
  }

  @media screen and (min-width: 1024px) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.darkGray};
    width: 11.75rem;
    border: 2px solid ${theme.colors.darkGray};

    & svg {
      & g {
        & polygon {
          fill: ${theme.colors.darkGray};
        }
      }
    }

    &:hover {
      background-color: ${theme.colors.darkGray};
      color: ${theme.colors.white};

      & svg {
        & g {
          & polygon {
            fill: ${theme.colors.white};
          }
        }
      }
    }
  }
`;

export const StyledButtonTextContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  line-height: 1rem;
  width: 100%;

  @media screen and (min-width: 1024px) {
    padding-left: 1.25rem;
  }
`;

export const StyledArrow = styled(Arrow)``;
