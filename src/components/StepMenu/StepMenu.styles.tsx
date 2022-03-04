import styled from "styled-components";
import theme from "../../theme";

export const StyledStepMenuHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 4.75rem;
  gap: 0.1875rem;

  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
  }

  &:after {
    content: "";
    position: absolute;
    top: 9rem;
    left: 0;
    width: 100%;
    height: 70px;
    background-image: linear-gradient(to bottom, white, rgba(255, 255, 255, 0));

    @media screen and (min-width: 1481px) {
      top: 10.75rem;
    }
  }
`;

export const StyledStepContainer = styled.div<{ highlighted: boolean }>`
  padding: 0.61rem 0.7rem;
  ${({ highlighted }) =>
    highlighted &&
    `
    border-bottom: 2px solid ${theme.colors.gold}; 
    & h3 {
        color: ${theme.colors.gold};
    }
    `};
`;

export const StyledStepTitle = styled.h3<{ disabled?: boolean }>`
  font-size: 0.875rem;
  line-height: 0.875rem;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1.4px;
  color: ${({ disabled }) =>
    disabled ? theme.colors.disabled : theme.colors.darkGray};
  transition: 0.3s ease;

  &:hover {
    color: ${({ disabled }) =>
      disabled ? theme.colors.disabled : theme.colors.gold};
  }
`;
