import styled from "styled-components";
import theme from "../../theme";
import Arrow from "../../icons/Arrow";

export const StyledButtonPrimary = styled.button`
  display: flex;
  padding: 0.8rem;
  border: 2px solid ${theme.colors.darkGray};
  border-radius: 0.25rem;
  width: 100%;
  background-color: ${theme.colors.darkGray};
  color: ${theme.colors.white};

  & svg {
    position: absolute;
    transform: rotate(90deg);
  }

  @media screen and (min-width: 1024px) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.darkGray};

    &:hover {
      background-color: ${theme.colors.darkGray};
      color: ${theme.colors.white};
    }
  }
`;

export const StyledButtonTextContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  line-height: 1rem;
  width: 100%;
`;

export const StyledArrow = styled(Arrow)`
  & path {
    fill: ${theme.colors.white};
  }
`;
